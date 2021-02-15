import React from 'react-native';
import  {StyleSheet} from 'react-native';
import { brandRed } from '../../../../theme/Colors';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    contact: {
        padding: 10
    },
    title: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        color: '#333'
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: '#555'
    },
    form: {
        padding: 10,
    },
    input: {
        backgroundColor: '#fff',
        marginLeft: 0,
        paddingLeft: 10,
        paddingRight: 30
    },
    searchIconBox: {
        position: 'absolute',
        right: 10,
        top: 12,
        backgroundColor: '#fff'
    },
    searchIcon: {
        color: brandRed,
        fontSize: 20
    },
    trending: {
        padding: 10
    },
    list: {
        marginTop: 10
    },
    searchItem: {
        lineHeight: 35,
        color: '#555'
    }

});

export default styles;
