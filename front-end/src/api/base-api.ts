import axios, { AxiosRequestConfig } from "axios";

export default function request(path: string, params: AxiosRequestConfig)
{
    let url = "http://localhost:50396";

    return axios({
        ...params,
        url: url + path,
        timeout: 60000
    })
}