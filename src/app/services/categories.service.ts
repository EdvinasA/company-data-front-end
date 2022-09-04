import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDisplay, SubCategoryDisplay } from '../models/category';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: ApiGatewayService) {}

  getCategories(): Observable<CategoryDisplay[]> {
    return this.http.get<CategoryDisplay[]>('/shop/category');
  }

  getSubCategories(category: string): Observable<SubCategoryDisplay[]> {
    return this.http.get<SubCategoryDisplay[]>(`/shop/category/${category}`);
  }
}
