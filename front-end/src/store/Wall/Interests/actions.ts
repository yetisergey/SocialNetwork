import {
    SHOW_ADD_INTEREST,
    HIDE_ADD_INTEREST,
    LOAD_INTERESTS_SUCCESS,
    LOAD_INTERESTS_FAIL,
    ADD_INTEREST_SUCCESS,
    ADD_INTEREST_FAIL
} from './types'

import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { loadInterests, addInterest } from '../../../api/network/interest/interest-api';
import { REQUEST } from '../types';

export const loadInterestsAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(action(REQUEST));
        loadInterests()
            .then(interests => dispatch(action(LOAD_INTERESTS_SUCCESS, interests)),
                error => dispatch(action(LOAD_INTERESTS_FAIL, error)));
    };
}

export const showAddInputAction = () => action(SHOW_ADD_INTEREST);

export const hideAddInputAction = () => action(HIDE_ADD_INTEREST);

export const addInterestAction = (name: string)  => {
    return (dispatch: Dispatch) => {
        dispatch(action(REQUEST));
        addInterest(name)
            .then(interest => dispatch(action(ADD_INTEREST_SUCCESS, interest)),
                error => dispatch(action(ADD_INTEREST_FAIL, error)));
    };
}

