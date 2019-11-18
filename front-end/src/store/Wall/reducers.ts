import { REQUEST, LOAD_USER_SUCCESS } from "./types"
import { WallActionTypes } from "./types";
import {
    SHOW_ADD_INTEREST,
    HIDE_ADD_INTEREST,
    LOAD_INTERESTS_SUCCESS,
    ADD_INTEREST_SUCCESS
} from "./Interests/types";
import { interestReducer } from "./Interests/reducers";
import { IWallStore } from "../../models/wall/types";

export const initialStateWall: IWallStore = {
    user: {
        avatar: '',
        firstName: '',
        lastName: '',
        email: ''
    },
    interests: {
        addInputVisible: false,
        arrayOfInterests: []
    }
}

export function wallReducer(state: IWallStore = initialStateWall, action: WallActionTypes) {
    console.log(action.type)
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOAD_INTERESTS_SUCCESS:
        case SHOW_ADD_INTEREST:
        case HIDE_ADD_INTEREST:
        case ADD_INTEREST_SUCCESS:
            return {
                ...state,
                interests: interestReducer(state.interests, action)
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        default:
            return state
    }
};