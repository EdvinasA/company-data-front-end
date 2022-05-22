import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../../services/user.service";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {
  login,
  loginFailure,
  loginSuccess,
  signup,
  signupFailure,
  signupSuccess
} from "./userActions";
import {of} from "rxjs";

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {
  }

  userLogin$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(login),
        exhaustMap(({user}) => {
            return this.userService.login(user).pipe(
              map(response => loginSuccess(response)),
              catchError((error: any) => of(loginFailure(error))));
          }
        )
      );
    }
  );

  userSignup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      exhaustMap(({user}) =>
        this.userService.register(user).pipe(
          map(response => signupSuccess(response)),
          catchError((error: any) => of(signupFailure(error))))
      )
    )
  );

}
