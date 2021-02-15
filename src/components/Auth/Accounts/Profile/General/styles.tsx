import React from 'react-native';
import { brandGrey, brandLightGrey, brandRed } from '../../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    content: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    imagePicker:{
        alignItems:'center'
    },
    userInformation:{
        marginTop:50
    }, 
    imageBox: {
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#fafafa',
        padding: 10
    },
    info:{
        flexDirection:'row',
        flex:1,
        padding:18,
        marginBottom:5,
        backgroundColor:'#fafafa'
    },
    label:{
        width:80,
        color:brandRed
    },
    separator:{
        width:20
    },
    value:{
        color: brandGrey
    },
    editAction:{
        marginLeft:10,
        marginRight:10,
    },
    editBtn:{
        width:50,
        height:20,
        alignSelf:'flex-end',
        backgroundColor:'#fff',
    },
    editText:{
        color:'#999',
        fontSize:13
    },
    image:{
        borderColor:brandLightGrey,
        borderWidth:1,
        width:150,
        height:150,
        resizeMode:'cover',
        borderRadius:75,
        alignSelf:'center'
    }
});

export default styles;
