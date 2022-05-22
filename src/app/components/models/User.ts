import {Tokens} from "./tokens";

export interface User {
  email: string,
  fullName: string,
  token: Tokens,
  registeredDate: Date;
}
