import request from "../base-api";

export const getUser = () =>
    request('/api/user', { method: "GET" })
        .then(response => response.data)