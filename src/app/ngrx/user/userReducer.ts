import { login, loginSuccess, signup, signupSuccess } from "./userActions";
import {Action, createReducer, on} from "@ngrx/store";

export interface State {
  token: any;
  result: any;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  token: localStorage.getItem('token'),
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const loginReducer = createReducer(
  initialState,
  on(login, (state, token) => {
    return ({token, isLoading: true, result: '', isLoadingFailure: false, isLoadingSuccess: false});
  }),
  on(loginSuccess, (state, result) => {
    return ({token: state.token, result, isLoading: false, isLoadingFailure: false, isLoadingSuccess: true});
  }),
  on(signup, (state, token) => {
    return ({token, isLoading: true, result: '', isLoadingFailure: false, isLoadingSuccess: false});
  }),
  on(signupSuccess, (state, result) => ({token: state.token, result, isLoading: false, isLoadingFailure: false, isLoadingSuccess: true}))
);

export function reducer(state: State | undefined, action: Action): any {
  return loginReducer(state, action);
}

export const getLoggedInUser = (state: State) => {
  return {
    token: state.token,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userLogin = (state: State) => {
  return {
    token: state.token,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userSignup = (state: State) => {
  return {
    token: state.token,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};
