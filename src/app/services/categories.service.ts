import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: ApiGatewayService) {}

  getCategories(): Observable<Category> {
    return this.http.get<Category>('/shop/categories');
  }
}
