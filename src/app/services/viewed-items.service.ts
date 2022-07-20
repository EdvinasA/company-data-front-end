import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {ViewedItem} from "../models/viewed-item";

@Injectable({
  providedIn: 'root'
})
export class ViewedItemsService {

  constructor(private http: ApiGatewayService) {
  }

  createViewedItem(body: ViewedItem, userId: string) {
    return this.http.post<ViewedItem>(`/viewed-item/${userId}`, body);
  }

  getViewedItemsByUserId(userId: string) {
    return this.http.get<ViewedItem[]>(`/viewed-item/${userId}`)
  }
}
