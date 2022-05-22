import { createAction, props } from "@ngrx/store";
import { Login } from "../../components/models/login";
import {Register} from "../../components/models/register";

export const USER_LOGIN = '[Login Page] Login';
export const USER_LOGIN_SUCCESS = '[Login Page] Login Success';
export const USER_LOGIN_FAILURE = '[Login Page] Login Failure';
export const USER_SIGNUP = '[SignUp Page] Signup';
export const USER_SIGNUP_SUCCESS = '[SignUp Page] Signup Success';
export const USER_SIGNUP_FAILURE = '[SignUp Page] Signup Failure';

export const login = createAction(
  USER_LOGIN,
  props<{user: Login}>()
);

export const loginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<any>()
)

export const loginFailure = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
)

export const signup = createAction(
  USER_SIGNUP,
  props<{user: Register}>()
);

export const signupSuccess = createAction(
  USER_SIGNUP_SUCCESS,
  props<any>()
)

export const signupFailure = createAction(
  USER_SIGNUP_FAILURE,
  props<{message: string}>()
)
