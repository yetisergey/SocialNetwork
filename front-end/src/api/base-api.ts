import axios, { AxiosRequestConfig } from "axios";


let getAuthHeaders = () => {
    let headers: any = {};
    headers["Authorization"] = localStorage.getItem('accessToken');
    headers["X-UserId"] = localStorage.getItem('userId');
    return headers;
}

export default function request(path: string, params: AxiosRequestConfig) {
    const url = "http://localhost:50396";
    const headers = { ...params.headers, ...getAuthHeaders() };
    return axios({
        ...params,
        url: url + path,
        headers: headers,
        timeout: 60000
    })
}