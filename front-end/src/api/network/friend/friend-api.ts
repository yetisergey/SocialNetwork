import request from "../base-api";
import { IUser } from "../../../models/user/types";

export const getFriends = () =>
    request('/api/friends', { method: "GET" })
        .then(response => response.data as IUser)

export const addFriend = () =>
    request('/api/friends', { method: "GET" })