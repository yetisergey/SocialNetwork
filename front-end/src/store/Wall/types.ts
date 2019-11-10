import { InterestsActionTypes } from "./Interests/types"
import { IUser } from "../../models/user/types"

export const REQUEST = 'REQUEST'

export const LOAD_WALL_SUCCESS = 'LOAD_WALL_SUCCESS'
export const LOAD_WALL_FAIL = 'LOAD_WALL_FAIL'

export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL'

interface IWallActionTypes {
    type: typeof REQUEST | typeof LOAD_WALL_SUCCESS | typeof LOAD_WALL_FAIL 
}

interface IUserActionTypes {
    type: typeof REQUEST | typeof LOAD_USER_SUCCESS | typeof LOAD_USER_FAIL
    payload: IUser
}

export type WallActionTypes = IWallActionTypes | IUserActionTypes | InterestsActionTypes;