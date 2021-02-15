import React, { Platform, Dimensions } from 'react-native'
import { brandLightGrey, brandRed, brandYellow } from '../../../../../theme/Colors';
var screenWidth = Dimensions.get('window').width;
var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        paddingBottom: 100
    },
    productgallery: {
        height: 300,
        borderBottomWidth: 1,
        borderColor: brandLightGrey
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
    productPrice: {
        padding: 10,
        borderColor: brandLightGrey,
        borderBottomWidth: 1,
        backgroundColor: '#f7f7f7',
        paddingTop:20
    },
    productTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5
    },
    productPriceText: {
        fontSize: 13
    },
    productSize: {
        padding: 10,
        borderColor: brandLightGrey,
        borderBottomWidth: 1
    },
    slide: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideImg: {
        width: 300,
        height: 300
    },
    productDetails: {
        padding: 10
    },
    productText: {
        color: '#6b6b6b',
        lineHeight: 25,
        fontSize: 13
    },
    select: {
        backgroundColor: '#f7f7f7',
        width: 50,
        alignItems: 'center'
    },
    optionList: {
        backgroundColor: 'transparent',
        height: 50
    },
    size: {
        marginTop: 8,
        color: brandRed
    },
    backView: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#f3f3f3',
        flexDirection: 'row'
    },
    back: {
        width: 80,
        padding: 10,
        paddingLeft: 0,
        color: brandRed
    },
    backIcon: {
        fontSize: 20,
        lineHeight: Platform.OS === 'ios' ? 35 : 40,
        marginLeft: 10,
        color: brandRed
    }
})
export default styles;
