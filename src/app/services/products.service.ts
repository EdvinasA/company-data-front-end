import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {Observable} from "rxjs";
import {Page} from "../models/page";
import {Laptop} from "../models/laptop";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: ApiGatewayService) {
  }

  getPagedListOfLaptops(size: string, page: number): Observable<Page> {
    return this.http.get<Page>(`/shop/laptop?page=${page}&size=${size}`);
  }

  getLaptopById(id: string) {
    return this.http.get<Laptop>(`/shop/laptop/${id}`)
  }

}
