import { LogOutAction } from '../action/logOut'

const INITIAL_STATE = {
    isProcessing: false,
    isAuthenticated: false,
    authUser: {}
}

export var LogOutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LogOutAction.LOGOUT:
            return {
                ...state, isProcessing: true,
            };

        case LogOutAction.LOGOUT_SUCCESS:
            return {
                ...state, isProcessing: false, isAuthenticated: false, authUser: {}
            };
        default:
            return { ...state };

    }

}