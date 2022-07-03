import { Injectable } from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {Observable} from "rxjs";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: ApiGatewayService) { }

  getCategories(): Observable<Category> {
    return this.http.get<Category>("/shop/categories")
  }
}
