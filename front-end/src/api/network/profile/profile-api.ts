import request from "../base-api";
import { IUser } from "../../../models/user/types";

export const getUserProfile = () =>
    request('/api/profile', { method: "GET" })
        .then(response => response.data as IUser)