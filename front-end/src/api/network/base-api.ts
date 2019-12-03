import axios, { AxiosRequestConfig } from "axios";
import { history } from "../../store";
import getAuthHeaders from "../headers";

export default function request(path: string, params: AxiosRequestConfig) {
    const url = "http://localhost:50396";
    const headers = { ...params.headers, ...getAuthHeaders() };
    return axios({
        ...params,
        url: url + path,
        headers: headers,
        timeout: 60000
    }).catch(error => {
        // unauthorized exception
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
            history.push("/enter");
        }
        return error;
    })
}