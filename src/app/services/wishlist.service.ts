import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {ReplaySubject, Subject, Subscription} from "rxjs";
import {WishlistCreate, WishlistProfiles} from "../models/wishlist";
import {catchError, finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: ApiGatewayService) {
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

}
