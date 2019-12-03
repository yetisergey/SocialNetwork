import { REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL } from './types'
import { action } from 'typesafe-actions';
import { getUserProfile } from '../../api/network/profile/profile-api';
import { Dispatch } from 'redux';

export const loadUserProfileAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(action(REQUEST));

        getUserProfile()
            .then(user => dispatch(action(LOAD_USER_SUCCESS, user)),
                error => dispatch(action(LOAD_USER_FAIL, error)));
    };
}
