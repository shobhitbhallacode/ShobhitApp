import React from 'react-native';
import { Platform, StatusBar } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { brandColor, brandLightGrey, brandRed, brandYellow } from '../../../../theme/Colors';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    header: {
        height: (Platform.OS === 'ios') ? 60 : 50,
        backgroundColor: brandColor,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerIcons: {
        width: 40,
        height: 40
    },
    headerDrawerIcon: {
        width: 28,
        height: 28,
        marginTop: 4
    },
    headerNav: {
        paddingTop: 0
    },
    headerLeftText: {
        position: 'absolute',
        left: 15,
        top: (Platform.OS === 'ios') ? 20 : 12,
        zIndex: 1,
        flexDirection: 'row',
    },
    headerRightText: {
        position: 'absolute',
        right: 15,
        top: (Platform.OS === 'ios') ? 30 : 15,
        flexDirection: 'row',
     },
    headerLeftIcon: {
        top: (Platform.OS === 'ios') ? 30 : 15,
    },
    headerRightIcon: {
        top: (Platform.OS === 'ios') ? 20 : 5,
    },
    menuIcon: {
        fontSize: 20,
        color: brandYellow,
        marginLeft: 20
    },
    menuIconSearch: {
        fontSize: 25,
        marginTop: -2
    },
    menuIconCart: {
        fontSize: 20,
        marginTop: -1
    },
    count: {
        position: 'absolute',
        right: -18,
        top: -8,
        backgroundColor: brandRed,
        borderRadius: 50,
        width: 20,
        height: 20,
        overflow: 'hidden'
    },
    value: {
        color: '#fff',
        textAlign: 'center',
        lineHeight: (Platform.OS === 'ios') ? 20 : 17,
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default styles

