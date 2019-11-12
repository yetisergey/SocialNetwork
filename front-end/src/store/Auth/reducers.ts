import { IAuthStore } from "../../models/auth/types";
import { REQUEST, AUTH_FAIL, LOGOUT } from "./types";
import { AuthActionTypes, AUTH_SUCCESS } from "./types";

export const initialStateAuth: IAuthStore = {
    loading: false,
    accessToken: localStorage.getItem('accessToken') || null,
    userId: localStorage.getItem('userId') || null
}

export function authReducer(state: IAuthStore = initialStateAuth, action: AuthActionTypes) {
    console.log(action.type)
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: true
            };
        case AUTH_SUCCESS:
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('userId', action.payload.userId)
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userId,
                loading: false
            };
        case AUTH_FAIL:
            return {
                ...state,
                accessToken: '',
                loading: false
            };
        case LOGOUT:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
            return {
                ...state,
                accessToken: '',
                loading: false
            };
        default:
            return state
    }
};