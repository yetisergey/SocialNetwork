export const LOAD_FRIENDS_REQUEST = 'LOAD_FRIENDS_REQUEST'
export const LOAD_FRIENDS_SUCCESS = 'LOAD_FRIENDS_SUCCESS'
export const LOAD_FRIENDS_FAIL = 'LOAD_FRIENDS_FAIL'

export interface IFriendsStore {
    arrayOfFriends: IFriend[]
}

export interface IFriend {
    id: number;
    firstName: string;
    lastName: string;
}

interface IFriendsActionTypes {
    type: typeof LOAD_FRIENDS_REQUEST |
          typeof LOAD_FRIENDS_SUCCESS |
          typeof LOAD_FRIENDS_FAIL
    payload: IFriend[]
}

export type FriendsActionTypes = IFriendsActionTypes;