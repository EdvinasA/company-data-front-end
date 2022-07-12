import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {ReplaySubject, Subject, Subscription} from "rxjs";
import {Page} from "../models/page";
import {Laptop} from "../models/laptop";
import {catchError, finalize} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private cachedPage: Page | null = null;
  public pageSubject: Subject<Page | null> = new ReplaySubject<Page | null>();

  constructor(private http: ApiGatewayService,
              private router: Router) {
  }

  getPagedListOfLaptops(size: string, page: number): Subscription {
    return this.http
    .get<Page>(`/shop/laptop?page=${page}&size=${size}`)
    .pipe(
      catchError((err) => {
        throw err.message();
      }),
      finalize(() => {
        this.pageSubject.next(this.cachedPage);
      }),
    ).subscribe((response) => {
      this.router.navigate(['/']);
      this.cachedPage = response;
    });
  }

  getLaptopById(id: string) {
    return this.http.get<Laptop>(`/shop/laptop/${id}`)
  }

}
