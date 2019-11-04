export const LOAD_MSG_REQUEST = 'LOAD_MSG'
export const LOAD_MSG_SUCCESS = 'LOAD_MSG_SUCCESS'
export const LOAD_MSG_FAIL = 'LOAD_MSG_FAIL'

export const ADD_MSG_REQUEST = 'ADD_MSG_REQUEST'
export const ADD_MSG_SUCCESS = 'ADD_MSG_SUCCESS'
export const ADD_MSG_FAIL = 'ADD_MSG_FAIL'

export interface IMessagesStore {
    arrayOfMessages: IMessage[]
}

export interface IMessage {
    id: number;
    text: string;
}

interface IMessagesActionTypes {
    type: typeof LOAD_MSG_REQUEST |
          typeof LOAD_MSG_SUCCESS |
          typeof LOAD_MSG_FAIL
    payload: IMessage[]
}

interface IMessagesAddActionTypes {
    type: typeof ADD_MSG_REQUEST |
    typeof ADD_MSG_SUCCESS |
    typeof ADD_MSG_FAIL
    payload: IMessage
}

export type MessagesActionTypes = IMessagesActionTypes | IMessagesAddActionTypes;