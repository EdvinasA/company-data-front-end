import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Tokens } from "../components/models/tokens";
import { Register } from "../components/models/register";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(loginForm: FormGroup): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.url}/user/login`, null);
  }

  register(registerBody: Register): Observable<Tokens> {
    console.log(registerBody);
    return this.http.post<Tokens>(`${this.url}/user/register'`, registerBody)
  }
}
