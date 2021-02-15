import React from 'react-native';
import { brandLightGrey, brandRed } from '../../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    title: {
        padding: 10,
        fontWeight: 'bold',
        color: brandRed
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
