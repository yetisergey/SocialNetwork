import { ILoginResponse } from "../../models/auth/types";

export const REQUEST = 'REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'

interface ILoginActionTypes {
    type: typeof REQUEST | typeof AUTH_SUCCESS | typeof AUTH_FAIL
    payload: ILoginResponse
}

export const LOGOUT = 'LOGOUT'

interface ILogoutActionTypes {
    type: typeof LOGOUT
}

export type AuthActionTypes = ILoginActionTypes | ILogoutActionTypes;