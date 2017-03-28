import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { loginUser, signUpUser, addAlert } from '../actions';
import Loading from './alerts/Loading';
import EmailField from './inputs/EmailField';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: null,
            passwordError: null,
            loading: false
        };

    }
    onSignIn = (props) => {
        if (this.validate(props)) {
            this.setState({
                loading: true
            }, function () {
                this.props.dispatch(loginUser(props.email, props.password)).then(() => {
                    this.setState({
                        loading: false
                    }, function () {
                        this.setState(this.state);
                    });
                });
            });

        }

    }
    onSignUp = (props) => {
        if (this.validate(props)) {
            this.setState({
                loading: true
            }, function () {
                this.props.dispatch(signUpUser(props.email, props.password)).then(() => {
                    this.setState({
                        loading: false
                    }, function () {
                        this.setState(this.state);
                    });
                });
            });

        }
    }
    validate = (props) => {
        var errors = {};
        this.state.emailError = null;
        this.state.passwordError = null;

        if (!props.email) {
            this.state.emailError = "Please enter an email.";
        }
        if (!props.password) {
            this.state.passwordError = "Please enter a password.";
        }

        if (!this.state.emailError && !this.state.passwordError) {
            console.log("Send email and Password");
            return true;
        } else {
            return false;
        }
    }
    render() {
        const { handleSubmit } = this.props;
        var emailError = this.props.emailError;
        if (this.state.loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Login Page
                    </Text>
                    </View>
                    <View style={styles.field}>
                        <Field
                            name="email"
                            label="Email"
                            component={EmailField}
                        />
                        <View>{this.state.emailError ? <Text style={styles.formError}>You need an email.</Text> : null}</View>
                    </View>
                    <View style={styles.field}>
                        <Field
                            name="password"
                            label="Password"
                            component={PasswordField}
                        />
                        <View>{this.state.passwordError ? <Text style={styles.formError}>You need a password.</Text> : null}</View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleSubmit(props => this.onSignIn(props))}>
                            <Text style={styles.button}>
                                Sign In
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSubmit(props => this.onSignUp(props))}>
                            <Text style={styles.button}>
                                Sign Up
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }


    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 20,
        backgroundColor: '#2ECC71'
    },
    title: {
        color: 'white',
        fontSize: 35,
        marginTop: 20,
        marginBottom: 20
    },
    titleContainer: {
        padding: 10
    
    },
    input: {
        height: 26,
        padding: 4,
        paddingLeft: 8,
        borderRadius: 8,
        backgroundColor: 'white'

    },
    field: {
        borderRadius: 5,
        padding: 5,
        paddingLeft: 8,
        margin: 7,
        marginTop: 0,
        backgroundColor: 'white'
    },
    textInput: {
        height: 26
    },
    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        fontSize: 30,
        color: 'white'
    },
    formError: {
        color: 'red'
    }
});

module.exports = reduxForm({
    form: 'login',
    fields: ['email', 'password'],
}, )(Login);