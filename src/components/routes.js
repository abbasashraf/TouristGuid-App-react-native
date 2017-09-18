import React, { Component } from 'react'

import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';
import LogIn from './login';
import SignUp from './signup'
import App from './app'



export default class Route extends Component {
    
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='LogIn' component={LogIn} initial='true' hideNavBar='true' />
                    <Scene key='App' component={App} hideNavBar='true' />
                    <Scene key='SignUp' component={SignUp} hideNavBar='true' />
                </Scene>
            </Router>
        );
    }

}
