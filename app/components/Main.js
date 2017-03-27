//import liraries
import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    NavigatorIOS
} from 'react-native';

import TodoController from './TodoController';

// create a component
var Main = React.createClass({
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: TodoController,
                    title: 'Todo List',
                    navigationBarHidden: true

                }}
                style={styles.navigator}/>
        );
    }
});

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    navigator:{
        flex: 1
    }
});

// var mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     }
// };

//make this component available to the app
module.exports = Main;