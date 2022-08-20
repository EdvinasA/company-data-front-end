import { Injectable } from '@angular/core';
import { ViewedItem } from '../models/viewed-item';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class ViewedItemsService {
  constructor(private http: ApiGatewayService) {}

  createViewedItem(body: ViewedItem, userId: string | undefined) {
    return this.http.post<ViewedItem>(`/viewed-item/${userId}`, body);
  }

  getViewedItemsByUserId(userId: string | undefined) {
    return this.http.get<ViewedItem[]>(`/viewed-item/${userId}`);
  }
}
