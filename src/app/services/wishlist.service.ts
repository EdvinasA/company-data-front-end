import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import {
  WishlistCreate,
  WishlistItem,
  WishlistProfiles,
} from '../models/wishlist';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: ApiGatewayService) {}

  public wishlistProfilesList: WishlistProfiles[] = [];
  private profilesList = new BehaviorSubject(this.wishlistProfilesList);
  currentProfilesList = this.profilesList;

  createWishlist(userId: string | undefined, input: WishlistCreate) {
    this.http.post(`/wishlist/${userId}`, input).subscribe((id) => {
      if (id != undefined) {
        this.addPortfolioToList(id, input.name, userId);
      }
    });
  }

  addItemToWishlist(userId: string, item: WishlistItem) {
    return this.http.post(`/wishlist/${userId}/item`, item);
  }

  getWishlist(userId: string): Subscription {
    return this.http
      .get<WishlistProfiles[]>(`/wishlist/${userId}`)
      .pipe(
        catchError((err) => {
          throw err.message();
        }),
        finalize(() => {
          this.profilesList.next(this.wishlistProfilesList);
        })
      )
      .subscribe((response) => {
        this.wishlistProfilesList = response;
      });
  }

  getWishlistItems(
    userId: string | undefined,
    wishlistProfileId: string
  ): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(
      `/wishlist/${userId}/item/${wishlistProfileId}`
    );
  }

  deleteWishlistItem(userId: string | undefined, wishlistItemId: string) {
    return this.http.delete(`/wishlist/${userId}/item/${wishlistItemId}`);
  }

  deleteWishlistProfile(userId: string | undefined, wishlistProfileId: string) {
    return this.http
      .delete(`/wishlist/${userId}/${wishlistProfileId}`)
      .subscribe(() => {
        this.deletePortfolioFromList(wishlistProfileId);
      });
  }

  private addPortfolioToList(
    id: unknown,
    name: string,
    userId: string | undefined
  ) {
    let profile: WishlistProfiles = {
      id: id,
      name: name,
      items: [],
      userId: userId,
    };
    this.wishlistProfilesList.push(profile);
    this.profilesList.next(this.wishlistProfilesList);
  }

  private deletePortfolioFromList(id: string) {
    this.wishlistProfilesList = this.wishlistProfilesList.filter((profile) => {
      return profile.id !== id;
    });
    this.profilesList.next(this.wishlistProfilesList);
  }
}
