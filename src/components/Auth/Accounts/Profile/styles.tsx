import React from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { brandGrey, brandLightGrey, brandRed } from '../../../../../theme/Colors';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    footer: {
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: brandLightGrey
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    navigation: {
        backgroundColor: '#fafafa',
        padding: 10,
        paddingRight: 0,
        paddingLeft: 10,
        ...ifIphoneX({
            paddingBottom: 20
        }),
        borderColor: brandLightGrey,
        borderTopWidth: 1,
    },
    navigationItem: {
        width: 90,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: brandLightGrey,
        marginRight: 10,
        paddingTop: 4,
        overflow: 'hidden'
    },
    active: {
        borderWidth: 1,
        borderColor: brandRed
    },
    itemIcon: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 4,
        color: brandRed
    },
    itemName: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 4,
        paddingTop: 0,
        color: brandGrey
    }
})

export default styles
