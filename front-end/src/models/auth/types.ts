export interface IAuthStore {
    loading: boolean;
    accessToken?: string;
    userId?: number;
}

export interface ILoginResponse {
    accessToken: string;
    userId: number;
}