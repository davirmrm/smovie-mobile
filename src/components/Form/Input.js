import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Fonts } from '../../constants';

export const Input = ({
    label= '',
    value= '',
    placeholder= '',
    action= () => null,
    styles={},
}) => {

    return (
        <View style={{...stylesInput.inputBox, ...styles}}>
            {label && <Text>{label}</Text>}
            <TextInput
                style={stylesInput.input}
                onChangeText={action}
                value={value}
                placeholder={placeholder}
            />
        </View>
    );
}

const stylesInput = StyleSheet.create({
    inputBox: {
        flexDirection: 'row'
    },
    input: {
        backgroundColor: Colors.input_bg,

        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: Colors.input_bgh,
        color: Colors.input_color,
        fontSize: 16,
        padding: 10,
        height: 50,
        width: '100%',
    },
});
