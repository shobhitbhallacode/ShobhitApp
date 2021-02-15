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
    notifications: {
        padding: 5
    },
    notification: {
        backgroundColor: '#fff',
        padding: 5,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 4,
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom:5
    },
    notificationImg: {
        width: 100,
        height: 100
    },
    text: {
        marginLeft: 10,
        marginTop:10
    },
    title: {
        fontWeight: 'bold'
    },
    note: {
        color: '#555',
        width:220
    },
    close:{
        position:'absolute',
        right:10,
        top:2
    }
});

export default styles;
