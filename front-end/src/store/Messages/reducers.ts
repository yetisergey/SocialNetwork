import { IMessagesStore, LOAD_MSG, ADD_MSG } from "./types"
import { MessagesActionTypes } from "./types";

export const initialStateMessages: IMessagesStore = {
    arrayOfMessages: []
}

export function messagesReducer(state: IMessagesStore = initialStateMessages, action: MessagesActionTypes) {
    switch (action.type) {
        case LOAD_MSG:
            return {
                ...state,
                arrayOfMessages: action.payload
            };
        case ADD_MSG:
            return {
                ...state,
                arrayOfMessages: state.arrayOfMessages.concat([action.payload]),
            };
        default:
            return state;
    }
};