import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    ScrollView
 } from 'react-native';

import Login from './Login';
import TodoController from './TodoController';
import AlertContainer from './alerts/AlertContainer';

class App extends Component{
    
    render() {
        var renderMainView = () => {
            console.log(this.props);
            if(!this.props.user_id){
                return (
                <Login/>
                );
            } else {
                return (<TodoController/>);
            }
        };
        
        return (
            <View style={{flex: 1}}>
                {renderMainView()}
                <AlertContainer/>
            </View>
        )
    }
};

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
        user_id: state.auth.user_id
    }
};

module.exports = connect(mapStateToProps)(App);