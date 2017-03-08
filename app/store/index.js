import {createStore} from 'redux';
import reducer from '../reducer';

var defaultState = {
    todos: []
}

export var configureStore = (initialState=defaultState) => {
    var store = createStore(reducer, initialState);
    return store;
}