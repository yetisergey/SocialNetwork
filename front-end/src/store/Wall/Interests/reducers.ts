import {
    IInterestsStore,
    LOAD_INTERESTS_REQUEST,
    InterestsActionTypes,
    SHOW_ADD_INTEREST,
    ADD_INTEREST_REQUEST,
    HIDE_ADD_INTEREST
} from "./types"

export function interestReducer(state: IInterestsStore, action: InterestsActionTypes) {
    switch (action.type) {
        case LOAD_INTERESTS_REQUEST:
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
        case ADD_INTEREST_REQUEST:
            return {
                ...state,
                arrayOfInterests: state.arrayOfInterests.concat([action.payload])
            };
        default:
            return state;
    }
};