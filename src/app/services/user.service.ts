import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject, Subscription} from "rxjs";
import {Register} from "../models/register";
import {Login} from "../models/login";
import {ApiGatewayService} from "./api-gateway.service";
import {User, UserUpdateInput} from "../models/user";
import {catchError, finalize} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cachedUser: User | null = {};
  public userWasLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userSubject: Subject<User | null> = new ReplaySubject<User | null>();

  constructor(private http: ApiGatewayService,
              private _snackBar: MatSnackBar) {
    this.validate(localStorage.getItem('token'));
  }

  login(loginBody: Login): Subscription {
    return this.http
    .post<User>('/user/login', loginBody)
    .pipe(
      catchError((err) => {
        throw err.message();
      }),
      finalize(() => {
        this.userWasLoaded.next(true);
        this.userSubject.next(this.cachedUser);
      }),
    ).subscribe((response) => {
      if (response.email === null) {
        this.openSnackBar('Failed to get user!', 'Close');
      }
      if (response.token != undefined) {
        localStorage.setItem('token', response.token)
      }
      this.cachedUser = response;
    });
  }

  register(registerBody: Register): Subscription {
    return this.http
    .post<User>('/user/register', registerBody)
    .pipe(
      catchError((err) => {
        this.openSnackBar('Failed to register the user!', 'Close');
        throw err;
      }),
      finalize(() => {
        this.userWasLoaded.next(true);
        this.userSubject.next(this.cachedUser);
      }),
    ).subscribe(
      (response) => {
        if (response.token != undefined) {
          console.log(response.token)
          localStorage.setItem('token', response.token)
        }
        this.cachedUser = response;
    },
      (error) => {
        this.openSnackBar('Failed to register the user! Email already occupied!', 'Close');
      });
  }

  validate(token: string | null): Subscription {
    return this.http
    .get<User>(`/user/${token}`)
    .pipe(
      catchError((err) => {
        this.openSnackBar('Failed to validate user!', 'Close');
        throw err;
      }),
      finalize(() => {
        this.userSubject.next(this.cachedUser);
      }),
    ).subscribe((response) => {
      this.cachedUser = response;
      if (response.token != null || response.token != undefined) {
        this.userWasLoaded.next(true);
      }
    });
  }

  updateUser(input: UserUpdateInput): Observable<User> {
    return this.http.put<User>('/user', input);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
