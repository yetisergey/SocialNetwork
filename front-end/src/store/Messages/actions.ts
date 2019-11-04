import { LOAD_MSG_REQUEST, ADD_MSG_REQUEST } from './types'
import { action } from 'typesafe-actions';
import { initialStateMessages } from './reducers';
//createAsyncAction
export const loadMessagesAction = () => action(LOAD_MSG_REQUEST, initialStateMessages.arrayOfMessages);
export const addMessageAction = (text: string) => action(ADD_MSG_REQUEST, { id: 10, text: text });

