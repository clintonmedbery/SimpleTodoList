import axios from 'axios';
import * as Keychain from 'react-native-keychain';

import { SIGNIN_URL, SIGNUP_URL } from '../api';
import { addAlert } from './alertActions';

authUser = (user_id) => {
    console.log("AUTH USER");
    return {
        type: 'AUTH_USER',
        user_id
    }
}

exports.unauthUser = {
    type: 'UNAUTH_USER'
}

exports.loginUser = (email, password) => {
    console.log(SIGNIN_URL);
    return function (dispatch) {
        return axios.post(SIGNIN_URL, { email, password }).then((response) => {
            var { user_id, token } = response.data;
            Keychain.setGenericPassword(user_id, token)
                .then(function () {
                    console.log('Credentials saved successfully!');
                    dispatch(authUser(user_id));
                    dispatch(addAlert(token));
                });
                // .catch((error) => {
                //     dispatch(addAlert("Could not login. Keychain failure: " + error));
                // });

        }).catch((error) => {
            dispatch(addAlert("Could not Sign Up: " + error));
        });
    }
}

exports.signUpUser = (email, password) => {
    console.log(SIGNUP_URL);
    return function (dispatch) {
        return axios.post(SIGNUP_URL, { email, password }).then((response) => {
            var { user_id, token } = response.data;
            Keychain.setGenericPassword(user_id, token)
                .then(function () {
                    console.log('Credentials saved successfully!');
                    dispatch(authUser(user_id));
                    dispatch(addAlert(token));
                });
                // .catch((error) => {
                //     dispatch(addAlert("Could not login. Keychain failure: " + error));
                // });
        }).catch((error) => {
            dispatch(addAlert("Could not Sign Up: " + error));
        });
    }
}

