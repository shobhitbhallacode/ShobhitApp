import React from 'react-native';
import { brandGreen, brandLightGrey, brandYellow } from '../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
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
    orderDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '100',
        marginTop: 2
    },
    orderedProducts: {
        marginTop: 15,
        paddingTop: 10,
        backgroundColor: '#FFC9C9'
    },
    productItem: {
        borderWidth: 1,
        borderColor: '#e6e6e6',
        margin: 10,
        marginTop: 0,
        borderRadius: 4,
        marginBottom: 10,
    },
    productCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        overflow: 'hidden',
        padding: 10,
    },
    productImageContainer: {
        height: 150,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    productImage: {
        width: 100,
        flex: 1,
        margin: 0,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: '#f2f2f2'
    },
    productDetails: {
        flex: 1,
        marginLeft: 8
    },
    productTitle: {
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 5
    },
    productSeller: {
        fontSize: 13,
        fontWeight: '200'
    },
    selection: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    size: {
        marginRight: 20
    },
    productPrice: {
        flex: 1,
        flexDirection: 'row',
    },
    currentPrice: {
        marginRight: 10
    },
    actions: {
        flex: 0.08,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: brandLightGrey,
        borderTopWidth: 1
    },
    button: {
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        flex: 1,
        borderRadius: 0
    },
    buttonText: {
        color: brandYellow
    },
    saveBtn: {
        marginRight: 0,
        borderColor: brandLightGrey,
        borderRightWidth: 1
    },
    progress: {
        padding: 30,
        paddingBottom: 20,
    },
    progressDetails: {
        margin:10
    },
    progressTitle:{
        fontWeight:'bold',
        color:brandGreen,
        marginBottom:5
    },
    payment:{
        padding:10,
        paddingTop:20,
    },
    label:{
        fontWeight:'bold',
        color:brandGreen,
        marginBottom:5
    }
});

export default styles;
