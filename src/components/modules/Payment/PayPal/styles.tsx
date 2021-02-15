import React from 'react-native';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    totalAmount: {
        backgroundColor: '#D2E9B7',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    choose: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 10
    },
    paypal: {
        lineHeight: 20,
        color: '#555555'
    },
    bold: {
        fontWeight: 'bold'
    },
    bank: {
        flex: 1,
        flexDirection: 'row'
    },
    bankImg: {
        width: 60,
        height: 32
    },
    bankName: {
        marginLeft: 20,
        marginTop: 8
    }
});
export default styles;
