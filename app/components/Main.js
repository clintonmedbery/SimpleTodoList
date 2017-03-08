import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    ScrollView
 } from 'react-native';

import TodoItem from './TodoItem';

var Main = React.createClass ({
    render() {
        var temporaryTodos = [
            {
                id: "123",
                text: "Todo 1"
            },
            {
                id: "1232",
                text: "Todo 2"
            }
        ]
        var renderTodos = () => {
            return temporaryTodos.map((todo) => {
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
                        <TextInput style={styles.input}/>
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
module.exports = Main;