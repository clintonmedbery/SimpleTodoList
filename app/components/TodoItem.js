import React from 'react';
import {connect} from 'react-redux';
import { 
    TouchableOpacity,
    StyleSheet,
    Text,
    View
 } from 'react-native';

import {incrementCounter, decrementCounter} from '../actions';

var TodoItem = React.createClass ({
    
    render() {
        return (
            <View style={styles.todoContainer}> 
                <Text style={styles.todoText}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#CCC'
  },
  todoText: {

  }
});


module.exports = TodoItem;