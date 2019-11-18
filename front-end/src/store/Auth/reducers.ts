import { IAuthStore } from "../../models/auth/types";
import { AuthActionTypes, REGISTER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "./types";

export const initialStateAuth: IAuthStore = {
    loading: false,
    accessToken: localStorage.getItem('accessToken') || null,
    userId: localStorage.getItem('userId') || null
}

export function authReducer(state: IAuthStore = initialStateAuth, action: AuthActionTypes) {
    console.log(action.type)
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('userId', action.payload.userId)
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userId,
                loading: false
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('userId', action.payload.userId)
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userId,
                loading: false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                accessToken: '',
                loading: false
            };
        case REGISTER_FAIL:
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