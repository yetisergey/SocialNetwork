import { IMessage } from "../../models/messages/types"

export const LOAD_MSG = 'LOAD_MSG'
export const ADD_MSG = 'ADD_MSG'

export interface IMessagesStore {
    arrayOfMessages: IMessage[]
}

interface IMessagesActionTypes {
    type: typeof LOAD_MSG
    payload: IMessage[]
}

interface IMessagesAddActionTypes {
    type: typeof ADD_MSG
    payload: IMessage
}

export type MessagesActionTypes = IMessagesActionTypes | IMessagesAddActionTypes;