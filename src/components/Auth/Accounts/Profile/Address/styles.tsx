import React from 'react-native';
import { brandGrey, brandYellow } from '../../../../../../theme/Colors';
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
    content: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    button: {
        backgroundColor:brandYellow,
        borderRadius: 0
    },
    addressItem:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        margin: 10,
        marginTop: 0,
        borderRadius: 4,
        marginBottom: 10,
        padding:10,
        paddingRight:50
    },
    address:{
        lineHeight:22,
        fontSize:14,
        fontWeight:'200'
    },
    selectedAddress:{
        borderWidth:2,
        borderColor:brandYellow
    },
    addressAction:{
        position:'absolute',
        right:-40,
        top:0,
        borderColor:'#e6e6e6',
        borderWidth:1,
        width:30,
        height:30,
        justifyContent:'center',
        borderRadius:20,
        zIndex:2
    },
    editAddress:{
        top:38
    },
    icon:{
        fontSize:15,
        textAlign:'center',
        color:brandGrey
    },
    addNewAction:{
        marginLeft:10,
        marginRight:10,
    },
    addNewBtn:{
        width:90,
        height:30,
        alignSelf:'flex-end',
        backgroundColor:'#fff',
        borderColor:brandYellow,
        borderWidth:1,
    },
    addNewBtnText:{
        color:brandYellow,
        fontSize:13
    }
});

export default styles;
