import React from 'react-native';
import { StyleSheet } from 'react-native';
import { brandRed, brandYellow } from '../../../../../../../theme/Colors';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
    },
    content: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    button: {
        backgroundColor: brandYellow,
        borderRadius: 0
    },
    form: {
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 0,
    },
    field: {
    },
    fieldLabel: {
        color: brandRed,
        marginBottom: 5
    },
    input: {
        marginBottom: 25,
        borderWidth: 0,
        borderBottomWidth: 1,
        padding: 0,
        paddingLeft: 0,
        height: 30
    },
    addressTypes:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:25,
        marginTop:10
    },
    type:{
        borderWidth:1,
        borderColor:'#e6e6e6',
        padding:10,
        borderRadius:4,
        flex:1,
        alignItems: 'center',
    },
    margins:{
        marginLeft:10,
        marginRight:10
    },
    selected:{
        borderWidth:2,
        borderColor:brandYellow
    }
});

export default styles;
