import { IMessagesStore, LOAD_MSG_REQUEST, ADD_MSG_REQUEST } from "./types"
import { MessagesActionTypes } from "./types";

export const initialStateMessages: IMessagesStore = {
    arrayOfMessages: [{ id: 1, text: "Привет" },
    { id: 2, text: "Привет" },
    { id: 3, text: "Привет" },
    { id: 4, text: "Привет" },
    { id: 5, text: "Привет" },
    { id: 6, text: "Привет" },
    { id: 7, text: "Привет" },
    { id: 8, text: "Привет" },
    { id: 9, text: "Привет" },
    { id: 10, text: "Привет" },
    { id: 11, text: "Привет" }
    ]
}

export function messagesReducer(state: IMessagesStore = initialStateMessages, action: MessagesActionTypes) {
    switch (action.type) {
        case LOAD_MSG_REQUEST:
            return {
                ...state,
                arrayOfMessages: action.payload
            };
        case ADD_MSG_REQUEST:
            return {
                ...state,
                arrayOfMessages: state.arrayOfMessages.concat([action.payload]),
            };
        default:
            return { ...state }
    }
};