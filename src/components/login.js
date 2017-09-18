import React, { Component } from 'react';
import { BackAndroid, BackHandler, View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, KeyboardAvoidingView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { SigninAction } from '../store/action/logIn';


function mapStateToProps(state) {
    return {
        isAuthenticated: state.LoginReducer.isAuthenticated,
    }
}


class LogIn extends Component {

    constructor(props) {

        BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.props.isAuthenticated) {
                BackHandler.exitApp();
                console.log("back btn")
                return true;
            }
            return false;
        });
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
    }

    // componentDidMount() {
    //     if (!this.props.isAuthenticated) {
    //         Actions.LogIn()
    //     }
    //     else {
    //         Actions.App()
    //     }
    // }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.props.isAuthenticated) {
                BackHandler.exitApp();
                console.log("back btn")
                return true;
            }
            return false;
        });
    }



    handleSignIn() {
        var credentials = {};
        credentials.email = this.state.email
        credentials.password = this.state.pass
        this.props.dispatch(SigninAction.login(credentials));
        console.log(credentials, "credentials")
    }


    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.containerOne}>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../images/logo.png')} />
                    {/*<Text resizeMode="contain" style={styles.logo}>photo</Text>*/}

                </View>

                {/*<View style={styles.meralogo}>

                </View>*/}

                <View style={styles.formContainer}>
                    <View style={styles.container}>
                        <StatusBar barStyle="light-content" />
                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            onChange={ev => this.setState({ email: ev.nativeEvent.text })}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Email'
                            placeholderTextColor='rgba(225,225,225,0.7)' />

                        <TextInput style={styles.input}
                            onChange={ev => this.setState({ pass: ev.nativeEvent.text })}
                            placeholder='Password'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            secureTextEntry />
                        <TouchableOpacity style={styles.buttonContainer}
                            onPress={this.handleSignIn.bind(this)}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singupStyle} onPress={() => Actions.SignUp()}>
                            <Text style={styles.signupbtnstyle}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        backgroundColor: '#2c3e50',
        padding: 4,

    },
    container: {
        padding: 20,

    },
    loginContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        // borderColor: "black",
        //borderWidth: 6,
        height: 200,
        paddingTop: 0,
        // marginTop:50
    },
    logo: {
        marginTop: 200,
        position: 'absolute',
        width: 250,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: "black",
        //borderWidth: 6,
        //  paddingBottom:200


    },
    formContainer: {
        flex: 1,
        paddingTop: 0

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',

    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    singupStyle: {
        padding: 6,
        width: 90,
        //   backgroundColor: 'rgba(225,225,225,0.2)',
    },
    signupbtnstyle: {
        color: "#fff"
    }

});

export default connect(mapStateToProps)(LogIn);