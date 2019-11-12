import { IFriend } from "../../models/friends/types";

export const REQUEST = 'REQUEST'
export const LOAD_FRIENDS_SUCCESS = 'LOAD_FRIENDS_SUCCESS'
export const LOAD_FRIENDS_FAIL = 'LOAD_FRIENDS_FAIL'

interface IFriendsActionTypes {
    type: typeof REQUEST |
          typeof LOAD_FRIENDS_SUCCESS |
          typeof LOAD_FRIENDS_FAIL
    payload: IFriend[]
}

export type FriendsActionTypes = IFriendsActionTypes;