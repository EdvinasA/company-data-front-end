import { Injectable } from '@angular/core';
import { ApiGatewayService } from "./api-gateway.service";
import { Observable } from "rxjs";
import { Page } from "../models/page";
import {KeyValuePairObject} from "../utils/key-value-pair-object";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  parameter!: KeyValuePairObject;

  constructor(private http: ApiGatewayService) {
  }

  getPagedListOfLaptops(size: string): Observable<Page> {
    return this.http.get<Page>(`/shop/laptop?size=${size}`);
  }

}
