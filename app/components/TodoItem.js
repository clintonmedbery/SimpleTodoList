import React from 'react';
import {connect} from 'react-redux';
import { 
    TouchableOpacity,
    StyleSheet,
    Text,
    View
 } from 'react-native';

import {deleteTodo} from '../actions';

var TodoItem = React.createClass ({
    deleteTodo(){
        this.props.dispatch(deleteTodo(this.props.id));
    },
    render() {
        return (
            <TouchableOpacity onPress={this.deleteTodo}>
                <View style={styles.todoContainer}> 
                    <Text style={styles.todoText}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
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


module.exports = connect()(TodoItem);