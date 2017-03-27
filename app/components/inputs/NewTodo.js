//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { createTodo } from '../../actions';
import Loading from '../alerts/Loading';


// create a component
var NewTodoInput = React.createClass({
    getInitialState() {
        return {
            newTodoText: undefined,
            loading: false
        }
    },
    addNewTodo() {
        var { newTodoText } = this.state;
        var { dispatch } = this.props;
        if (newTodoText && newTodoText != "") {
            this.setState({
                loading: true
            }, function () {
                dispatch(createTodo(newTodoText)).then(() => {
                    this.setState({
                        loading: false
                    }, function () {
                        this.setState(this.state);
                        this.props.navigator.pop();

                    });
                });
            });

            console.log(this.state.newTodoText);

        }
    },
    onBack() {
        this.props.navigator.pop();
    },
    render() {
        if (this.state.loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <TouchableOpacity onPress={this.onBack}>
                            <Icon name="chevron-left" size={20} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            To-Do List
                        </Text>
                        <TouchableOpacity onPress={this.addNewTodo}>
                            <Icon name="check" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContainer}
                        automaticallyAdjustContentInsets={false}>
                        <View style={styles.inputContainer}>

                            <TextInput
                                onChangeText={(newTodoText) => {
                                    this.setState({ newTodoText });
                                }}
                                placeholder="New Todo"
                                style={styles.input} />
                        </View>
                    </ScrollView>
                </View>
            );
        }

    }
});

// define your styles
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
        padding: 5,
        paddingLeft: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#2ECC71'
    },
    input: {
        height: 26

    }
});

var mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

module.exports = connect(mapStateToProps)(NewTodoInput);
