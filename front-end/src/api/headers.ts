export default function getAuthHeaders() {
    let headers: any = {};
    headers["Authorization"] = 'Bearer ' + localStorage.getItem('accessToken') || '';
    return headers;
}