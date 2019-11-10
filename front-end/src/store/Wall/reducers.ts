import { REQUEST, LOAD_USER_SUCCESS } from "./types"
import { WallActionTypes } from "./types";
import {
    LOAD_INTERESTS_REQUEST,
    ADD_INTEREST_REQUEST,
    SHOW_ADD_INTEREST,
    HIDE_ADD_INTEREST
} from "./Interests/types";
import { interestReducer } from "./Interests/reducers";
import { IWallStore } from "../../models/wall/types";

export const initialStateWall: IWallStore = {
    user: {
        avatar: 'https://sun9-54.userapi.com/c853628/v853628492/11decf/k3UxaHY5Vlw.jpg',
        fio: 'Масленников Сергей Андреевич',
        status: 'Здесь должен быть какой-то умный статус'
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
        case LOAD_INTERESTS_REQUEST:
        case SHOW_ADD_INTEREST:
        case HIDE_ADD_INTEREST:
        case ADD_INTEREST_REQUEST:
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