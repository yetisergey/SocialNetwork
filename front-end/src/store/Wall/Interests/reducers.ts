import {
    InterestsActionTypes,
    SHOW_ADD_INTEREST,
    HIDE_ADD_INTEREST,
    LOAD_INTERESTS_SUCCESS,
    ADD_INTEREST_SUCCESS
} from "./types"
import { IInterestsStore } from "../../../models/interest/types";


export function interestReducer(state: IInterestsStore, action: InterestsActionTypes) {
    switch (action.type) {
        case LOAD_INTERESTS_SUCCESS:
            return {
                ...state,
                arrayOfInterests: action.payload
            };
        case SHOW_ADD_INTEREST:
            return {
                ...state,
                addInputVisible: true
            };
        case HIDE_ADD_INTEREST:
            return {
                ...state,
                addInputVisible: false
            };
        case ADD_INTEREST_SUCCESS:
            return {
                ...state,
                arrayOfInterests: state.arrayOfInterests.concat([action.payload])
            };
        default:
            return state;
    }
};