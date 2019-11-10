import { IAuthStore } from "../../models/auth/types";
import { REQUEST } from "./types";
import { AuthActionTypes, AUTH_SUCCESS } from "./types";

export const initialStateAuth: IAuthStore = {
    loading: false
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
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userId,
                loading: false
            };
        default:
            return state
    }
};