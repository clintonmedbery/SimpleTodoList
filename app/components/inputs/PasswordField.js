import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

var PasswordField = React.createClass({
    render() {
        const { input: { value, onChange }, ...otherProps } = this.props;
        return (
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChange(text)}
                value={value}
                {...otherProps}
            />
        );
    }
});
const styles = StyleSheet.create({
    textInput: {
        height: 26
    }
});

module.exports = PasswordField;