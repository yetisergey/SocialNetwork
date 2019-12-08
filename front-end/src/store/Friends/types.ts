import { IFriend } from "../../models/friends/types";

export const REQUEST = 'REQUEST'
export const LOAD_FRIENDS_SUCCESS = 'LOAD_FRIENDS_SUCCESS'
export const LOAD_FRIENDS_FAIL = 'LOAD_FRIENDS_FAIL'

export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAIL = 'ADD_FRIEND_FAIL'

interface IFriendsActionTypes {
    type: typeof REQUEST |
          typeof LOAD_FRIENDS_SUCCESS |
          typeof LOAD_FRIENDS_FAIL
    payload: IFriend[]
}

interface IAddFriendActionTypes {
    type: typeof REQUEST |
    typeof ADD_FRIEND_SUCCESS |
    typeof ADD_FRIEND_FAIL
}

export type FriendsActionTypes = IFriendsActionTypes | IAddFriendActionTypes;