export const LOAD_WALL = 'LOAD_WALL'
export const LOAD_USER = 'LOAD_USER'

export interface IWallStore {
    user: IUser;
    arrayOfInterests: IInterest[];
}

export interface IUser {
    avatar: string;
    fio: string;
}

export interface IInterest {
    Name: string;
}

interface IWallActionTypes {
    type: typeof LOAD_WALL | typeof LOAD_USER
}

export type WallActionTypes = IWallActionTypes