import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {AbstractControl, FormGroup} from "@angular/forms";
import { Observable } from "rxjs";
import { Tokens } from "../components/models/tokens";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(email: AbstractControl | null): Observable<Tokens> {
    console.log(this.url + '/user/login')
    return this.http.post<Tokens>(this.url + '/user/login/' + 'asd@gmail.com', null);
  }
}
