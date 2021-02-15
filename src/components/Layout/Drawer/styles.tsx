import React from 'react-native'
import { StatusBar, Platform } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { brandGreen, brandYellow } from '../../../../theme/Colors'
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 20,
        borderColor: '#e9e9e9',
        borderBottomWidth: 1,
        ...ifIphoneX({
            paddingTop: 40
        }),
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    drawerLogo: {
        fontSize: 30,
        color: brandGreen,
        marginTop: 4,
        marginLeft: 10
    },
    drawerProfileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 0
    },
    logo: {
        width: 100,
        height: 30,
        marginTop: 8
    },
    login: {
        margin: 20
    },
    button: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: brandYellow
    },
    buttonText: {
        color: brandYellow
    }
})
export default styles
