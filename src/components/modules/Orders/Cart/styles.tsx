import React from 'react-native';
import { StyleSheet } from 'react-native';
import { brandGreen, brandGrey, brandLightGrey, brandRed, brandYellow } from '../../../../../theme/Colors';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex:1,
        backgroundColor: '#f3f3f3',
    },
    content: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    total: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    totalAmount: {
        fontWeight: 'bold',
        color:brandGreen
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
    orginalPrice: {
        fontWeight: '200',
        marginRight: 10,
        textDecorationLine: 'line-through'
    },
    percentageOff: {
        color: brandRed
    },
    actions: {
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
    optionLabel: {
        padding: 10,
    },
    optionList: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        margin: 10,
        marginTop: 0,
        borderRadius: 4,
        marginBottom: 10,
    },
    option: {
        padding: 20,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        overflow: 'hidden'
    },
    noBorder: {
        borderBottomWidth: 0
    },
    optionData: {
        flex: 1,
        flexDirection: 'row',
    },
    optionText: {
        fontSize: 15,
        fontWeight: '200',
        flex: 1
    },
    optionIcon: {
        fontSize: 18,
        marginRight: 10,
        color: brandRed
    },
    optionAction: {
        position: 'absolute',
        right: -10,
        top: 5,
        color: brandGrey
    },
    priceDetailsLabel: {
        padding: 10,
    },
    priceCalculations: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        margin: 10,
        marginTop: 0,
        borderRadius: 4,
        marginBottom: 10,
        padding:15,
    },
    priceItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    priceItemText:{
        fontSize: 15,
        color: brandGrey,
        fontWeight:'200',
        lineHeight:35
    },
    boldText:{
      fontWeight:'bold'
    },
    highlightText:{
        color: brandGreen,
    },
    yellowBtn:{
        backgroundColor:brandYellow,
        marginTop:-4
    },
    white:{
        color:'#fff'
    }
});

export default styles;
