import axios from 'axios';
import * as Keychain from 'react-native-keychain';

import { TODOS_URL, TODO_URL } from '../api';
import { addAlert } from './alertActions';

exports.createTodo = (text) => {
    return function (dispatch) {
        return Keychain.getGenericPassword().then((credentials) => {
            var { username, password } = credentials;
            return axios.post(TODOS_URL(username), { text }, {
                headers: { authorization: password }
            }).then((response) => {
                dispatch(addTodo(response.data.todo));
            }).catch((error) => {
                dispatch(addAlert(error));

            });
        })
    }
}

exports.deleteTodo = (todo_id) => {
    return function (dispatch) {
        return Keychain.getGenericPassword().then((credentials) => {
            var { username, password } = credentials;
            return axios.delete(TODO_URL(username, todo_id), {
                headers: { authorization: password }
            }).then((response) => {
                dispatch(removeTodo(todo_id));
            }).catch((error) => {
                dispatch(addAlert(error));

            });
        })
    }
}

exports.getTodos = function (dispatch) {
    return Keychain.getGenericPassword().then((credentials) => {
        var { username, password } = credentials;
        return axios.get(TODOS_URL(username), {
            headers: { authorization: password }
        }).then((response) => {
            dispatch(setTodos(response.data.todos));
        }).catch((error) => {
            dispatch(addAlert(error));

        });
    })
}


var addTodo = (newTodo) => {
    return {
        type: 'ADD_TODO',
        newTodo
    }
};

var setTodos = (todos) => {
    return {
        type: 'GET_TODOS',
        todos
    }
};


var removeTodo = (todo_id) => {
    return {
        type: 'DELETE_TODO',
        todo_id
    }
}