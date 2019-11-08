import { LOAD_FRIENDS_REQUEST } from './types'
import { action } from 'typesafe-actions';
import { initialStateFriends } from './reducers';
//createAsyncAction
export const loadFriendsAction = () => action(LOAD_FRIENDS_REQUEST, initialStateFriends.arrayOfFriends);


