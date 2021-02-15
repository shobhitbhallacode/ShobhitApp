import React from 'react-native';
import { brandGrey, brandLightGrey, brandRed } from '../../../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    gridView: {
        marginBottom: 200
    },
    gridHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10
    },
    gridTitle: {
        color: brandGrey,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 6
    },
    gridbutton: {
        height: 30,
        padding: 10
    },
    gridbuttonStyle: {
        color: brandGrey,
        fontSize: 12
    },
    gridBody: {
        backgroundColor: "#fff",
        alignSelf: 'stretch'
    },
    gridContent: {
        borderTopWidth:1,
        borderColor: '#e6e6e6'
    },
    gridCol: {
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: brandLightGrey
    },
    gridItem: {
        height: 250,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    gridImg: {
        flex: 1,
        margin: 0,
        resizeMode: 'contain'
    },
    productBox: {
        paddingTop: 4,
        paddingLeft: 4,
        paddingBottom: 4,
        backgroundColor: '#fafafa'
    },
    productName: {
        fontSize: 10,
        color: brandGrey,
        marginBottom: 2
    },
    productText: {
        fontSize: 10,
        color: brandGrey
    },
    removeLink:{
        position:'absolute',
        right:10,
        top:8
    },
    removeLinkText:{
        color:brandRed,
        fontWeight:'bold'
    }
});

export default styles;
