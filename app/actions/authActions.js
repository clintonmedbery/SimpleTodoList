import axios from 'axios';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertActions';

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
    return function(dispatch) {
        return axios.post(SIGNIN_URL, {email, password}).then((response) =>{
            var {user_id, token} = response.data;
            dispatch(authUser(user_id));
            dispatch(addAlert(token));
        }).catch((error) => {
            dispatch(addAlert("Could not login"));
        });
    }
}

exports.signUpUser = (email, password) => {
    console.log(SIGNUP_URL);
    return function(dispatch) {
        return axios.post(SIGNUP_URL, {email, password}).then((response) =>{
            var {user_id, token} = response.data;
            dispatch(addAlert(token));
            dispatch(authUser(user_id));
        }).catch((error) => {
            dispatch(addAlert("Could not Sign Up"));
        });
    }
}

