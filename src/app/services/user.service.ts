import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { User, UserUpdateInput } from '../models/user';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token: string | null = localStorage.getItem('token');
  private cachedUser!: User;
  public userWasLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public userSubject: Subject<User | null> = new ReplaySubject<User | null>();

  constructor(private http: ApiGatewayService, private _snackBar: MatSnackBar) {
    if (this.token != null) {
      this.validate(this.token);
    }
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
        })
      )
      .subscribe((response) => {
        if (response.email === null) {
          this.openSnackBar('Failed to get user!', 'Close');
        }
        if (response.token != undefined) {
          localStorage.setItem('token', response.token);
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
        })
      )
      .subscribe(
        (response) => {
          if (response.token != undefined) {
            console.log(response.token);
            localStorage.setItem('token', response.token);
          }
          this.cachedUser = response;
        },
        (error) => {
          this.openSnackBar(
            'Failed to register the user! Email already occupied!',
            'Close'
          );
        }
      );
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
        })
      )
      .subscribe((response) => {
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

  async getLoadedUser() {
    const user = await this.userSubject.toPromise();

    console.log(user);
  }
}
