import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {BehaviorSubject, Observable, ReplaySubject, Subject, Subscription} from "rxjs";
import {WishlistCreate, WishlistItem, WishlistProfiles} from "../models/wishlist";
import {catchError, finalize} from "rxjs/operators";
import {Cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: ApiGatewayService) {
    this.getWishlist("860eb71b-310e-4463-a9ed-7c224dea7eec");
  }

  public wishlistProfilesList: WishlistProfiles[] = [];
  private profilesList = new BehaviorSubject(this.wishlistProfilesList);
  currentProfilesList = this.profilesList.asObservable();

  createWishlist(userId: string, input: WishlistCreate) {
    this.http.post(`/wishlist/${userId}`, input).subscribe(id => {
      if (id != undefined) {
        this.updateCurrentPortfoliosList(id, input.name, userId);
      }
    });
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
      }),
    ).subscribe((response) => {
      this.wishlistProfilesList = response;
    });
  }

  getWishlistItems(userId: string, wishlistProfileId: string): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(`/wishlist/${userId}/item/${wishlistProfileId}`);
  }

  deleteWishlistItem(userId: string, wishlistItemId: string) {
    return this.http.delete(`/wishlist/${userId}/item/${wishlistItemId}`);
  }

  deleteWishlistProfile(userId: string, wishlistProfileId:string) {
    return this.http.delete(`/wishlist/${userId}/${wishlistProfileId}`);
  }

  private updateCurrentPortfoliosList(id: string | unknown, name: string, userId: string) {
    let profile: WishlistProfiles = {
      id: id,
      name: name,
      items: [],
      userId: userId
    }
      this.wishlistProfilesList.push(profile);
      console.log(this.wishlistProfilesList);
      this.profilesList.next(this.wishlistProfilesList);
    }

}
