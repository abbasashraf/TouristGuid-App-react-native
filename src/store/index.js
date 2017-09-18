import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// reducers 
import { LoginReducer } from './reducer/logIn';
import { SignUpReducer } from './reducer/signUp'
import { LogOutReducer } from './reducer/logOut'

const rootReducer = combineReducers({ LoginReducer, SignUpReducer, LogOutReducer })
const middle = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middle);