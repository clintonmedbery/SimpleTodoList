import React from 'react';
import {connect} from 'react-redux';

import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

import {removeAlert} from '../../actions';

var Alert = React.createClass ({
    onRemoveAlert() {
        var {dispatch, alert} = this.props;
        dispatch(removeAlert(alert.id));
        // this.props.dispatch(removeAlert(this.props.alert.id));
    },
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onRemoveAlert}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        {this.props.alert.text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
});

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#f2dede',
        borderColor: '#ebccd1',
        borderTopWidth: 2
    },
    text: {
        color: "#a94442"
    }
});

var mapStateToProps = (state) => {
    return {
        alerts: state.alerts
    }
}

module.exports = connect()(Alert);
