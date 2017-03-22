import uuid from 'uuid';
import _ from 'lodash';
import update from 'react-addons-update';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';
import alertReducer from './alertsReducer';

module.exports = combineReducers({
    form: formReducer,
    auth: authReducer,
    alerts: alertReducer
});
