export interface IAuthStore {
    loading: boolean;
    accessToken: string | null;
    userId: string | null;
}

export interface ILoginResponse {
    accessToken: string;
    userId: string;
}