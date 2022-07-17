import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {Observable, ReplaySubject, Subject, Subscription} from "rxjs";
import {WishlistCreate, WishlistItem, WishlistProfiles} from "../models/wishlist";
import {catchError, finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: ApiGatewayService) {
    this.getWishlist("860eb71b-310e-4463-a9ed-7c224dea7eec");
  }

  private cachedWishlist: WishlistProfiles[] | null = null;
  public wishlistSubject: Subject<WishlistProfiles[] | null> = new ReplaySubject<WishlistProfiles[] | null>();

  createWishlist(userId: string, input: WishlistCreate) {
    return this.http.post(`/wishlist/${userId}`, input);
  }

  getWishlist(userId: string): Subscription {
    return this.http
    .get<WishlistProfiles[]>(`/wishlist/${userId}`)
    .pipe(
      catchError((err) => {
        throw err.message();
      }),
      finalize(() => {
        this.wishlistSubject.next(this.cachedWishlist);
      }),
    ).subscribe((response) => {
      this.cachedWishlist = response;
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

}
