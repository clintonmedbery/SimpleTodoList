import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    ScrollView,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import TodoItem from './TodoItem';
import NewTodoInput from './inputs/NewTodo';
import { unauthUser, getTodos } from '../actions';

var TodoController = React.createClass({
    getInitialState() {
        return {
            refreshing: false,
            newTodoText: ""

        }
    },
    onRefresh() {
        this.setState({
                refreshing: true
            }, function () {
                this.props.dispatch(getTodos).then(() => {
                    this.setState({
                        refreshing: false
                    }, function () {
                        this.setState(this.state);
                    });
                });
            });
    },
    onLogout() {
        // this.props.dispatch(setTodos([]));
        this.props.dispatch(unauthUser);
    },
    goToNewTodo() {
        this.props.navigator.push({
            component: NewTodoInput,
            title: "New Todo",
            navigationBarHidden: true
        })
    },
    render() {
        console.log("TODOS", this.props.todos);
        var renderTodos = () => {
            console.log("refreshing", this.state.refreshing);
            return this.props.todos.map((todo) => {

                return (
                    <TodoItem text={todo.text} key={todo._id} id={todo._id} />
                )
            });
        }
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={this.onLogout}>
                        <Icon name="x" size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        To-Do List
                        </Text>
                    <TouchableOpacity onPress={this.goToNewTodo}>
                        <Icon name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh} />
                    }
                    contentContainerStyle={styles.scrollViewContainer}
                    automaticallyAdjustContentInsets={false}>
                    {renderTodos()}
                </ScrollView>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    topBar: {
        padding: 16,
        paddingTop: 28,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2ECC71'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    inputContainer: {
        padding: 8,
        paddingTop: 0,
        backgroundColor: '#2ECC71'
    },
    input: {
        height: 26,
        padding: 4,
        paddingLeft: 8,
        borderRadius: 8,
        backgroundColor: 'white'

    }
});

var mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

module.exports = connect(mapStateToProps)(TodoController);