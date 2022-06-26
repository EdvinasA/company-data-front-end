import {Injectable} from '@angular/core';
import {ReplaySubject, Subject, Subscription} from "rxjs";
import {Register} from "../models/register";
import {Login} from "../models/login";
import {ApiGatewayService} from "./api-gateway.service";
import {User} from "../models/user";
import {catchError, finalize} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cachedUser: User | null = null;
  public userWasLoaded: boolean = false;
  public userSubject: Subject<User | null> = new ReplaySubject<User | null>();

  constructor(private http: ApiGatewayService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  login(loginBody: Login): Subscription {
    return this.http
    .post<User>('/user/login', loginBody)
    .pipe(
      catchError((err) => {
        throw err.message();
      }),
      finalize(() => {
        this.userWasLoaded = true;
        this.userSubject.next(this.cachedUser);
      }),
    ).subscribe((response) => {
      if (response.email === null) {
        this.openSnackBar('Failed to get user!', 'Close');
      }
      localStorage.setItem('token', response.token)
      this.router.navigate(['/']);
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
        this.userWasLoaded = true;
        this.userSubject.next(this.cachedUser);
      }),
    ).subscribe(
      (response) => {
        localStorage.setItem('token', response.token)
        this.cachedUser = response;
        this.router.navigate(['/']);
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
        this.userWasLoaded = true;
        this.userSubject.next(this.cachedUser);
      }),
    ).subscribe((response) => {
      this.cachedUser = response;
      this.router.navigate(['/']);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
