import React from 'react-native';
import { brandLightGrey, brandRed } from '../../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    couponList: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#e9e9e9',
        backgroundColor: '#fff',
        padding: 10,
        paddingTop:20,
        paddingBottom:0
    },
    coupon: {
        borderWidth: 2,
        borderColor: '#e9e9e9',
        borderRadius: 4,
        padding: 10,
        marginBottom:20
    },
    available: {
        borderColor: '#cde4b2',
        backgroundColor: '#fbfff6'
    },
    offer: {
        marginBottom: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },
    description: {
        marginBottom: 5,
        fontSize: 13
    },
    code: {
        backgroundColor: '#cde4b2',
        alignSelf: 'flex-end',
        padding: 10,
        fontWeight: 'bold',
        marginTop: 10
    },
    title: {
        padding: 10,
        fontWeight: 'bold',
        color: brandRed,
        marginBottom: 20
    },
    imageBox: {
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#fafafa',
        padding: 10
    },
    image: {
        borderColor: brandLightGrey,
        borderWidth: 1,
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        alignSelf: 'center'
    }
});

export default styles;
