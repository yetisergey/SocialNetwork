import { LOAD_FRIENDS_SUCCESS, REQUEST, LOAD_FRIENDS_FAIL } from './types'
import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { getFriends } from '../../api/network/friend/friend-api';

export const loadFriendsAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(action(REQUEST));

        getFriends()
            .then(response => dispatch(action(LOAD_FRIENDS_SUCCESS, response)),
                error => dispatch(action(LOAD_FRIENDS_FAIL, error)));
    };
}


