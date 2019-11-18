import { ILoginResponse } from "../../models/auth/types";

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

interface ILoginActionTypes {
    type: typeof LOGIN_REQUEST | typeof LOGIN_SUCCESS | typeof LOGIN_FAIL
    payload: ILoginResponse
}

export const LOGOUT = 'LOGOUT'

interface ILogoutActionTypes {
    type: typeof LOGOUT
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

interface IReisterActionTypes
{
    type: typeof REGISTER_REQUEST | typeof REGISTER_SUCCESS | typeof REGISTER_FAIL
    payload: ILoginResponse
}

export type AuthActionTypes = ILoginActionTypes | ILogoutActionTypes | IReisterActionTypes;