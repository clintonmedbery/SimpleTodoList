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

// import TodoItem from './TodoItem';
import Login from './Login';
// import {addTodo} from '../actions';

var App = React.createClass ({
    render() {
        return (
               <Login/>
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

// var mapStateToProps = (state) => {
//     return {
//     }
// };

module.exports = App;