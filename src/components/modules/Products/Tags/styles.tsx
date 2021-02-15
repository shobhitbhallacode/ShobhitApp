import React, { Platform } from 'react-native'
import { brandLightGrey } from '../../../../../theme/Colors'
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    tagList: {
        padding: 10,
        paddingBottom: 5,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    tag: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: brandLightGrey
    },
    tagText: {
        fontSize: 10,
        padding: 5
    },
    remove: {
        height: Platform.OS === 'ios' ? 23 : 26,
        marginLeft: 2,
        backgroundColor: '#f7f7f7',
        paddingTop: Platform.OS === 'ios' ? 2 : 4,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 18
    }
})

export default styles
