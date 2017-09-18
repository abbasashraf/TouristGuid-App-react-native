
import firebase from '../../firebase';
import { Actions } from 'react-native-router-flux';


export class LogOutAction {
    static LOGOUT = "LOGOUT";
    static LOGOUT_SUCCESS = "LOGOUT_SUCCESS";




    static logout(){
        return (dispatch)=>{
             firebase.auth().signOut().then(function () {
                dispatch(LogOutAction.logoutSuccess());
                Actions.LogIn()
               // alert("logut succes")
            })
        }
    }

    static logoutSuccess(){
        return {
            type: LogOutAction.LOGOUT_SUCCESS
        }
    }
}