import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: ApiGatewayService,
              private router: Router) {
  }
  
  getPagedListOfLaptops(): Observable<any> {
    re
  }

}
