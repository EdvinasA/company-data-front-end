import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Page } from '../models/page';
import { Product } from '../models/product';
import { ApiGatewayService } from './api-gateway.service';
import { FormatterService } from './formatter.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private cachedPage: Page | null = null;
  public pageSubject: Subject<Page | null> = new ReplaySubject<Page | null>();

  constructor(
    private http: ApiGatewayService,
    private formatterService: FormatterService
  ) {}

  getPagedListOfLaptops(pageInfo: {
    page: number;
    size: number;
    sort?: string[];
    filter?: { field: string | object | undefined; value: string }[];
  }): Subscription {
    const queryString = this.formatterService.generateQueryString(
      pageInfo,
      true,
      true
    );
    return this.http
      .get<Page>(`/shop/product?${queryString}`)
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
