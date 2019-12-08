import { FriendsActionTypes, REQUEST, LOAD_FRIENDS_SUCCESS, ADD_FRIEND_SUCCESS } from "./types"
import { IFriendsStore } from "../../models/friends/types";

export const initialStateFriends: IFriendsStore = {
    loading: false,
    arrayOfFriends: []
}

export function friendsReducer(state = initialStateFriends, action: FriendsActionTypes) {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: false
            };
        case LOAD_FRIENDS_SUCCESS:
            return {
                ...state,
                arrayOfFriends: action.payload
            };
        case ADD_FRIEND_SUCCESS:
            return {
                ...state
            };
        default:
            return state;
    }
};