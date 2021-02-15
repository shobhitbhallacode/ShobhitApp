import React from 'react-native';
import { brandColor, brandFacebook, brandGoogle, CurrentTheme,  } from '../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CurrentTheme._BackgroundColor,
        width: undefined,
        height: undefined
    },
    logoContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 180,
        alignSelf: 'center'
    },
    form: {
        alignSelf: 'stretch',
        margin: 10
    },
    input: {
        borderColor: brandColor,
        marginBottom: 10
    },
    loginButton:{
        marginBottom: 10,
        backgroundColor:CurrentTheme.LoginButton_BackgroundColor,
        color:CurrentTheme.LoginButton_BackgroundColor_Text,
    },
    CommonButton:{
        backgroundColor: CurrentTheme.CommonButton_BackgroundColor,
        color:CurrentTheme.CommonButton_BackgroundColor_Text,
    },
    CommonButton_Active:{
        backgroundColor: CurrentTheme.CommonButton_BackgroundColor_Active,
        color:CurrentTheme.CommonButton_BackgroundColor_Text,
    },
    loginButton_Active:{
        backgroundColor:CurrentTheme.LoginButton_BackgroundColor_Active,

    },
    inputIcon: {
        color: '#bebac2'
    },
    lockIcon: {
        fontSize: 25,
        marginTop: -4
    },
    button: {
        backgroundColor: CurrentTheme.LoginButton_BackgroundColor,
        marginBottom: 10
    },
    facebookText: {
    },
    facebookBtn: {
        backgroundColor: brandFacebook
    },
    googleBtn: {
        backgroundColor: brandGoogle
    },
    black: {
        color: '#333'
    },
    forgotPassword: {
        color: '#e6e6e6',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        marginBottom: 20
    },
    option: {
        flexDirection: 'row'
    },
    optionText: {
        fontWeight: 'bold',
        color: '#e6e6e6'
    },
    action: {
        color: CurrentTheme.LoginButton_BackgroundColor
    }
})
export default styles
