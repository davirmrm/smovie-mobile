import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Fonts } from '../../constants';

export const Button = ({
    type= 'primary',
    title= 'Submit',
    buttonWidth= 'auto',
    disabled= false,
    loading= false,
    isIcon= false,
    paddingVertical= 12,
    paddingHorizontal= 12,
    onPress= null,
    styles= {},
    alignSelf,
    margin,
    marginBottom,
    fontSize,
}) => {
   
   const getButtonColor = (type) => {
        switch (type) {
            case 'primary':
                return Colors.primaryBg;
            case 'secondary':
                return Colors.ui_grey_05;
            case 'light':
                return Colors.ui_grey_05;
            default:
                return Colors.ui_grey_05;
        }
    }

    const getTitleColor = (type) => {
        switch (type) {
            case 'primary':
                return Colors.primaryColor;;
            case 'secondary':
                return 'black';
            case 'light':
                return 'black';
            default:
                return 'black';
        }
    }

    const getBorderColor = (type) => {
        switch (type) {
            case 'primary':
                return Colors.primaryBgh;
            case 'secondary':
                return 'white';
            case 'light':
                return 'white';
            default:
                return 'white';
        }
    }

    return (
        <TouchableOpacity
            disabled={loading ? true : disabled}
            style={[
                stylesButton.container,
                {
                    width: buttonWidth,
                    alignSelf: alignSelf ? alignSelf : 'center',
                    backgroundColor: disabled
                        ? Colors.ui_grey_70
                        : getButtonColor(type),
                    paddingVertical: paddingVertical,
                    paddingHorizontal: paddingHorizontal,
                    borderColor: disabled ? Colors.ui_grey_70 : getBorderColor(type),
                    borderWidth: 0.9,
                    margin: margin == undefined ? 10 : margin,
                    marginBottom: marginBottom == undefined ? 0 : marginBottom,
                },
                styles,
            ]}
            onPress={onPress}>
            <View style={{ flexDirection: 'row', opacity: loading ? 0.5 : 1 }}>
                {isIcon ? <Image source={icon} style={stylesButton.iconStyle} /> : null}

                <Text allowFontScaling={false}
                    style={[
                        stylesButton.buttonTitle,
                        {
                            color: disabled ? Colors.ui_grey_10 : getTitleColor(type),
                            fontSize: fontSize ? fontSize : 18
                        },
                    ]}>
                    {title.toUpperCase()}
                </Text>
                {loading && (
                    <ActivityIndicator color={Colors.white} style={{ marginStart: 5 }} />
                )}
            </View>
        </TouchableOpacity>
    );
}

const stylesButton = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 10,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonTitle: {
        fontSize: 18,
        fontFamily: Fonts.medium,
        textAlign: 'center',
    },
    iconStyle: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginEnd: 10,
    },
});

Button.propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    isIcon: PropTypes.bool,
    icon: PropTypes.any,
    style: PropTypes.any,

    type: PropTypes.oneOf([
        'primary',
        'positive',
        'negative',
        'secondary',
        'ghost',
        'light',
        'camera',
        'red',
        'hard',
        'cancel'
    ]),

    /**
     * StyleSheet props
     */
    buttonWidth: PropTypes.any,
    paddingVertical: PropTypes.number,

    /**
     * Callbacks
     */
    onPress: PropTypes.func,
};