import  {StyleSheet} from 'react-native';
import { brandGrey, brandLightGrey } from '../../../theme/Colors';

var styles = StyleSheet.create({
    gridandScroll: {
        backgroundColor: '#fff'
    },
    gridHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
        padding: 10,
        paddingBottom: 0
    },
    gridTitle: {
        color: brandGrey,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 6
    },
    gridbutton: {
        height: 32,
        padding: 10
    },
    gridbuttonStyle: {
        color: brandGrey,
        fontSize: 12
    },
    bigBannerBox: {
        padding: 10,
        paddingBottom: 0,
        paddingTop: 0
    },
    bigBanner: {
        flex: 1,
        height: 240,
        borderRadius: 4,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    bigBannerImg: {
        flex: 1
    },
    productInfo: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    productInfoTitle: {
        color: brandGrey,
        fontSize: 12,
        fontWeight: 'bold'
    },
    productInfoText: {
        color: brandGrey,
        fontSize: 12,
        marginTop: 2
    },
    products: {
        backgroundColor: '#fff',
        padding: 10,
        paddingRight: 0,
        paddingLeft: 10
    },
    product: {
        width: 90,
        backgroundColor: "#fff",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: brandLightGrey,
        marginRight: 10,
        overflow: 'hidden'
    },
    productDetails: {
        paddingTop: 4,
        paddingLeft: 4,
        paddingBottom: 4,
        backgroundColor: '#fff'
    },
    productImage: {
        height: 140,
        width: 88.2
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
    productPrice: {
        fontSize: 10,
        color: brandGrey
    },
});

export default styles;
