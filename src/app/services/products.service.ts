import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Subject, Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Product } from '../models/product';
import { Page } from '../models/page';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private cachedPage: Page | null = null;
  public pageSubject: Subject<Page | null> = new ReplaySubject<Page | null>();

  constructor(private http: ApiGatewayService, private router: Router) {}

  getPagedListOfLaptops(
    size: string,
    page: number,
    subCategory: any
  ): Subscription {
    return this.http
      .get<Page>(
        `/shop/product?page=${page}&size=${size}&subCategory=${subCategory}`
      )
      .pipe(
        catchError((err) => {
          throw err.message();
        }),
        finalize(() => {
          this.pageSubject.next(this.cachedPage);
        })
      )
      .subscribe((response) => {
        this.cachedPage = response;
      });
  }

  getLaptopById(id: string) {
    return this.http.get<Product>(`/shop/product/${id}`);
  }
}
