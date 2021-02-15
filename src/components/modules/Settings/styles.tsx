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
    item: {
        height: 52,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    link:{
        height: 52,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    text: {
        fontSize: 14,
        marginTop: 5,
        color: '#333'
    },
    arrowIcon: {
        fontSize: 30,
        color: '#555',
        position: 'absolute',
        right:0
    }
});

export default styles;
