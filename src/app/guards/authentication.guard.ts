import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  private isUserLoggedIn: boolean = true;
  private user!: User | null;

  constructor(private _router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.userService.userSubject.asObservable().subscribe((data) => {
      this.user = data;
      this.isUserLoggedIn = this.user != null;
    });

    if (localStorage.getItem('token') === null) {
      this._router.navigate(['/login']);
      return true;
    }
    return true;
  }
}
