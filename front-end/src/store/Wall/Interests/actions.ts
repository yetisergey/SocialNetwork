import {
    LOAD_INTERESTS_REQUEST,
    SHOW_ADD_INTEREST,
    ADD_INTEREST_REQUEST,
    HIDE_ADD_INTEREST
} from './types'

import { action } from 'typesafe-actions';

//createAsyncAction
export const loadInterestsAction = () => action(LOAD_INTERESTS_REQUEST, [
    { Id: 1, Name: 'Программирование' },
    { Id: 2, Name: 'Рисование' },
    { Id: 3, Name: 'Машины' },
    { Id: 4, Name: 'Велосипед' },
    { Id: 5, Name: 'Горные лыжи' }]);

export const showAddInputAction = () => action(SHOW_ADD_INTEREST);
export const hideAddInputAction = () => {console.log(2); return action(HIDE_ADD_INTEREST)};

export const addInterestAction = (name: string) => action(ADD_INTEREST_REQUEST, { Id: 6, Name: name })

