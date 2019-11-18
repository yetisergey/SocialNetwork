import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST } from './types'
import { action } from 'typesafe-actions';
import { login, register } from '../../api/auth/auth-api';
import { Dispatch } from 'redux';

export const loginAction = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(action(LOGIN_REQUEST));

        login(email, password)
            .then(response =>  dispatch(action(LOGIN_SUCCESS, response)),
                 error => dispatch(action(LOGIN_FAIL, error)));
    };
}

export const registerAction = (firstName: string, lastName: string, email: string, password: string) => 
{
    return (dispatch: Dispatch) => {
        dispatch(action(REGISTER_REQUEST));

        register(firstName, lastName, email, password)
            .then(response => dispatch(action(REGISTER_SUCCESS, response)),
                error => dispatch(action(REGISTER_FAIL, error)));
    };
}

export const logoutAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(action(LOGOUT));
    };
}