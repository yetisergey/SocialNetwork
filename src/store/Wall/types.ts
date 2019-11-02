import { IInterestsStore, InterestsActionTypes } from "./Interests/types"

export const LOAD_USER = 'LOAD_USER'
export const LOAD_WALL_REQUEST = 'LOAD_WALL'
export const LOAD_WALL_SUCCESS = 'LOAD_WALL_SUCCESS'
export const LOAD_WALL_FAIL = 'LOAD_WALL_FAIL'

export interface IWallStore {
    user: IUser;
    interests: IInterestsStore
}

export interface IUser {
    avatar: string;
    fio: string;
    status: string;
}

interface IWallActionTypes {
    type: typeof LOAD_WALL_REQUEST | typeof LOAD_WALL_SUCCESS | typeof LOAD_WALL_FAIL 
}

export type WallActionTypes = IWallActionTypes | InterestsActionTypes;