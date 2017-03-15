import React from 'react';
import {connect} from 'react-redux';
import { 
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    ScrollView
 } from 'react-native';

import TodoItem from './TodoItem';
import {addTodo} from '../actions';

var Main = React.createClass ({
    getInitialState() {
        return{
            newTodoText: ""

        }
    },
    addNewTodo(){
        var {newTodoText} = this.state;
        if (newTodoText && newTodoText != ""){
            this.setState({
                newTodoText: ""
            });
            this.props.dispatch(addTodo(newTodoText));
            console.log(newTodoText);
        }
    },
    render() {

        var renderTodos = () => {
            return this.props.todos.map((todo) => {
                
                return (
                    <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
                )
            });
        }
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                
                    <View style={styles.topBar}>
                        <Text style={styles.title}>                     
                            To-Do List
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        onChange={(event) => {
                            this.setState({
                                newTodoText: event.nativeEvent.text
                            });
                        }}
                        value={this.state.newTodoText}
                        returnKeyType="done"
                        placeholder="New To-Do"
                        style={styles.input}
                        onSubmitEditing={this.addNewTodo}/>
                    </View>
                <ScrollView automaticallyAdjustContnetInsets={false}>
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
  topBar:{
      padding: 16,
      paddingTop: 28,
      paddingBottom: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2ECC71'
  },
  title:{
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

module.exports = connect(mapStateToProps)(Main);