import { combineReducers } from 'redux'
import { wallReducer } from './Wall/reducers'
import { createBrowserHistory, History } from 'history';
import { createStore } from 'redux';
import { connectRouter } from 'connected-react-router';
import { StateType } from 'typesafe-actions';

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    wallReducer
})

export type storeType = StateType<ReturnType<typeof rootReducer>>

export const history = createBrowserHistory();

const store = createStore(rootReducer(history));

export default store;