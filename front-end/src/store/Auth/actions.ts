import { REQUEST, AUTH_SUCCESS, AUTH_FAIL } from './types'
import { action } from 'typesafe-actions';
import { login } from '../../api/auth/auth-api';
import { Dispatch } from 'redux';

export const loginAction = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(action(REQUEST));

        login(email, password)
            .then(response =>  dispatch(action(AUTH_SUCCESS, response)),
                 error => dispatch(action(AUTH_FAIL, error)));
    };
}
