import axios from 'axios';
import * as Keychain from 'react-native-keychain';

import { TODOS_URL, TODO_URL } from '../api';
import { addAlert } from './alertActions';

exports.createTodo = (text) => {
    return function(dispatch) {
        return Keychain.getGenericPassword().then((credentials) =>{
            var {username, password} = credentials;
            return axios.post(TODOS_URL(username), {text}, {
                headers: {authorization: password}
            }).then((response) => {
                dispatch(addTodo(response.data.todo));
            }).catch((error) =>{
                dispatch(addAlert(error));

            });
        })
    }
}

var addTodo = (newTodo) => {
    return {
        type: 'ADD_TODO',
        newTodo
    }
};

exports.deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}