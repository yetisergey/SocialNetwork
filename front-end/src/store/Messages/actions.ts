import { getMessages, sendMessage } from '../../api/chat/chat-api';
import { Dispatch } from 'redux';
import { LOAD_MSG, ADD_MSG } from './types';
import { IMessage } from '../../models/messages/types';
import { action } from 'typesafe-actions';

export const loadMessagesAction = (userTo: number) => {
    return (dispatch: Dispatch) => {
        getMessages(userTo, (messages: IMessage[]) => {
            dispatch(action(LOAD_MSG, messages))
        }, (message: IMessage) => {
            dispatch(action(ADD_MSG, message))
        })
    }
}

export const addMessageAction = (userTo: number, text: string) => {
    return (dispatch: Dispatch) => {
        sendMessage(userTo, text)
    }
}


