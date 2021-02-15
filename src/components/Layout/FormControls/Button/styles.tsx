import React from 'react-native';
import { brandYellow } from '../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: brandYellow,
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff'
    }
});
export default styles;
