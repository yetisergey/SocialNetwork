import request from "../base-api";
import { IInterest } from "../../../models/interest/types";

export const loadInterests = () =>
    request('/api/interests', { method: "GET" })
        .then(response => {
            return response.data as IInterest[];
        })

export const addInterest = (name: string) =>
    request('/api/interests', { method: "POST", data: { name: name } })
        .then(response => {
            return response.data as IInterest;
        })

export const deleteInterest = (id: number) =>
    request('/api/interests?interestId=' + id, { method: "DELETE" });