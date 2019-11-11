import request from "../base-api";
import { ILoginResponse } from "../../models/auth/types";

export const login = (email: string, password: string) =>
    request('/api/account', { method: "POST", data: { email: email, password: password } })
        .then(response => {
            let res = response.data as ILoginResponse
            return res;
        })