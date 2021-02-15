import React from 'react-native';
import { StyleSheet } from 'react-native';
import { brandRed } from '../../../../../theme/Colors';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    totalAmount: {
        backgroundColor: '#D2E9B7',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderColor: '#e9e9e9',
        borderBottomWidth: 1
    },
    categoryName: {
        color: brandRed
    },
    leftArrow: {
        position: 'absolute',
        right: 10,
        top: 18
    },
    firstItem: {
        borderColor: '#e9e9e9',
        borderTopWidth: 1
    },
    choose: {
        padding: 10,
        paddingTop:20,
        paddingBottom:20
    },
    bold:{
        fontWeight:'bold'
    }
});

export default styles;
