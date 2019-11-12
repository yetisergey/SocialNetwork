import request from "../base-api";
import { IUser } from "../../models/user/types";

export const getUser = () =>
    request('/api/user', { method: "GET" })
        .then(response => response.data as IUser)