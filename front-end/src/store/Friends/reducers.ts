import { IFriendsStore, LOAD_FRIENDS_REQUEST } from "./types"
import { FriendsActionTypes } from "./types";

export const initialStateFriends: IFriendsStore = {
    arrayOfFriends: [
        { id: 1, firstName: "Сергей", lastName: "Масленников" },
        { id: 2, firstName: "Сергей", lastName: "Масленников" },
        { id: 3, firstName: "Сергей", lastName: "Масленников" },
        { id: 4, firstName: "Сергей", lastName: "Масленников" },
        { id: 5, firstName: "Сергей", lastName: "Масленников" },
        { id: 6, firstName: "Сергей", lastName: "Масленников" },
        { id: 7, firstName: "Сергей", lastName: "Масленников" },
        { id: 8, firstName: "Сергей", lastName: "Масленников" },
        { id: 9, firstName: "Сергей", lastName: "Масленников" },
        { id: 10, firstName: "Сергей", lastName: "Масленников" },
        { id: 11, firstName: "Сергей", lastName: "Масленников" }
    ]
}

export function friendsReducer(state = initialStateFriends, action: FriendsActionTypes) {
    switch (action.type) {
        case LOAD_FRIENDS_REQUEST:
            return {
                ...state,
                arrayOfFriends: action.payload
            };
        default:
            return state;
    }
};