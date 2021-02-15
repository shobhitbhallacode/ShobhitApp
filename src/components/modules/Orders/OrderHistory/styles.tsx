import React from 'react-native';
import { brandGreen, brandLightGrey, brandRed } from '../../../../../theme/Colors';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
    },
    content: {
        paddingBottom: 100
    },
    list: {
        padding: 10
    },
    listItem: {
        borderColor: brandLightGrey,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        marginBottom: 10
    },
    text: {
        fontSize: 13,
        lineHeight: 22
    },
    button: {
        width: 70,
        height: 30,
        padding: 0
    },
    buttonText: {
        fontSize: 13
    },
    trackBtn: {
        backgroundColor: brandGreen
    },
    deliveredBtn: {
        width: 90,
        height: 30,
        padding: 0,
        backgroundColor: '#fff',
        borderColor: brandLightGrey,
        borderWidth: 1,
    },
    deliveredText: {
        color: brandGreen,
        fontSize: 13
    },
    canceledBtn: {
        width: 90,
        height: 30,
        padding: 0,
        backgroundColor: '#fff',
        borderColor: brandLightGrey,
        borderWidth: 1,
    },
    canceledText:{
        color: brandRed,
        fontSize: 13
    },
    activeText: {
        color: brandGreen,
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 18
    },
    footerBtn:{
        borderRadius:0,
    }
});

export default styles;
