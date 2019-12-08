import { LOAD_FRIENDS_SUCCESS, REQUEST, LOAD_FRIENDS_FAIL, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAIL } from './types'
import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { getFriends, addFriend } from '../../api/network/friend/friend-api';

export const loadFriendsAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(action(REQUEST));

        getFriends()
            .then(response => dispatch(action(LOAD_FRIENDS_SUCCESS, response)),
                error => dispatch(action(LOAD_FRIENDS_FAIL, error)));
    };
}

export const addFriendAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(action(REQUEST));

        addFriend()
            .then(_ => dispatch(action(ADD_FRIEND_SUCCESS)),
                _ => dispatch(action(ADD_FRIEND_FAIL)));
    };
}


