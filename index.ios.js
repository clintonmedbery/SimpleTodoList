
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry, 
  StyleSheet
} from 'react-native';

import {configureStore} from './app/store';
import App from './app/components/App';

export default class todoList extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todoList', () => todoList);
