import { SignUpAction } from '../action/signUp';



const INITIAL_STATE = {
    isRegistered: false,
    isError: false,
    isProcessing: false,
    errorMessage: {

    }
}

export var SignUpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SignUpAction.SIGNUP:
            return {
                ...state, isProcessing: true, isRegistered: false, isError: false
            }
        case SignUpAction.SIGN_UP_SUCCESS:
            return {
                ...state, isProcessing: false, isRegistered: true, isError: false, errorMessage: {}
            };
        case SignUpAction.SIGN_UP_UNSUCCESS:
            return {
                ...state, isProcessing: false, isRegistered: false, isError: true, errorMessage: action.paylod
            };
        default:
            return state
    }
}

