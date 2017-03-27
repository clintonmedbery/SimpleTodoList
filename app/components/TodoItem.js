import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';

import { 
    TouchableOpacity,
    StyleSheet,
    Text,
    View
 } from 'react-native';

import {deleteTodo} from '../actions';

var TodoItem = React.createClass ({
    getInitialState() {
        return {
            deleting: false
        }
    },
    deleteTodo(){
        this.setState({
                deleting: true
            }, function () {
                this.props.dispatch(deleteTodo(this.props.id)).then(() => {
                    this.setState({
                        deleting: false
                    }, function () {
                        this.setState(this.state);
                    });
                });
            });
    },
    render() {
        var renderDeleteButton = () => {
            if(!this.state.deleting) {
                return (
                    <TouchableOpacity onPress={this.deleteTodo}>
                        <Icon name="x" size={20} color="#2ECC71" />
                    </TouchableOpacity>
                )
            }
        }
        return (
                <View style={styles.todoContainer}> 
                    <Text style={styles.todoText}>
                        {this.props.text}
                    </Text>
                    {renderDeleteButton()}
                </View>
        );
    }
});

const styles = StyleSheet.create({
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: -1,
    borderColor: '#CCC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {

  }
});


module.exports = connect()(TodoItem);