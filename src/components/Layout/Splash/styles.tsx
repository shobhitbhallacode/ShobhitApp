import React from 'react-native';
import { Dimensions } from 'react-native';
import { brandColor } from '../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var screenWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
    splashView: {
        flex: 1,
        backgroundColor: brandColor,
        justifyContent: 'center'
    },
    logoContainer: {
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width:200,
        height:200,
        alignSelf: 'center'
    },
    splashViewText: {
        width: screenWidth,
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        color: '#fff'
    }
});

export default styles;
