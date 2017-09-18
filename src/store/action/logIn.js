
import firebase from '../../firebase';
import { Actions } from 'react-native-router-flux';

export class SigninAction {

    static LOGIN = "LOGIN";
    static LOGIN_SUCCESS = "LOGIN_SUCCESS";
    static LOGIN_UN_SUCCESS = "LOGIN_UN_SUCCESS";


    static login(credentials) {
        return (dispatch) => {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(function (res) {
                console.log("login success")
               // alert("login success")
                dispatch(SigninAction.loginSuccess());
                Actions.App();
            }).catch((err) => {
                alert(err.message)
                console.log(err.message)
                dispatch(SigninAction.loginUnSuccess());
            });
        }
    }
    static loginSuccess() {
        return {
            type: SigninAction.LOGIN_SUCCESS,
            payload: null
        }
    }
    static loginUnSuccess() {
        return {
            type: SigninAction.LOGIN_UN_SUCCESS,
            payload: null
        }
    }

    // static chekLogin(loginState) {
    //     return (dispatch) => {
    //         if (loginState == false) {
    //             hashHistory.replace("/login");
    //         }
    //         else {
    //             hashHistory.replace("/")
    //         }
    //     }
    //  }


}