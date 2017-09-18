import { SigninAction } from '../action/logIn.js'

const INITIAL_STATE = {
    authUser: {},
    isAuthenticated: false,
    isError: false,
    isProcessing: false,
    errorMessage: {

    }
}

export var LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SigninAction.LOGIN:
            return {
                ...state, isProcessing: true, isAuthenticated: false, isError: false
            };
        case SigninAction.LOGIN_SUCCESS:
            return {
                ...state,
                isProcessing: false, isAuthenticated: true, isError: false, authUser: action.payload, errorMessage: {}
            };
        case SigninAction.LOGIN_UN_SUCCESS:
            return {
                ...state, isProcessing: false, isAuthenticated: false, isError: true, authUser: {}, errorMessage: action.payload
            }
        default:
            return state;
    }
}