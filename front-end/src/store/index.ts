import { combineReducers } from 'redux'
import { wallReducer } from './Wall/reducers'
import { messagesReducer } from './Messages/reducers'
import { authReducer } from './Auth/reducers'
import { friendsReducer } from './Friends/reducers'
import { createBrowserHistory, History } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router';
import { StateType } from 'typesafe-actions';
import thunk from 'redux-thunk';

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    wallReducer,
    messagesReducer,
    friendsReducer,
    authReducer
})

export type storeType = StateType<ReturnType<typeof rootReducer>>

export const history = createBrowserHistory();

const store = createStore(rootReducer(history), applyMiddleware(thunk));

export default store;