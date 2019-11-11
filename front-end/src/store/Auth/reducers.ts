import { IAuthStore } from "../../models/auth/types";
import { REQUEST, AUTH_FAIL } from "./types";
import { AuthActionTypes, AUTH_SUCCESS } from "./types";

export const initialStateAuth: IAuthStore = {
    loading: false,
    accessToken: localStorage.getItem('accessToken') || "",
    userId: parseInt(localStorage.getItem('userId') || "0")
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
            localStorage.setItem('userId', action.payload.userId.toString())
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
        default:
            return state
    }
};