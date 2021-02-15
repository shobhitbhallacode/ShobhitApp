import  {StyleSheet} from 'react-native';
import { brandGrey, brandLightGrey } from '../../../theme/Colors';

var styles = StyleSheet.create({
    productList: {
        backgroundColor: '#e5bff7',
        padding: 10,
        paddingBottom: 0
    },
    product: {
        flexDirection: 'row',
        height: 85,
        backgroundColor: "#fff",
        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: brandLightGrey,
        overflow: 'hidden',
        padding: 10
    },
    productImg: {
        width: 65,
        height: 65,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: brandLightGrey,
        marginRight: 10
    },
    productType: {
        fontSize: 14,
        fontWeight: 'bold',
        color: brandGrey,
        marginBottom: 4
    },
    productRange: {
        fontSize: 12,
        color: brandGrey
    },
    button: {
        height: 32,
        padding: 10,
        position: 'absolute',
        right: 10,
        top: 28
    },
    buttonText: {
        color: brandGrey,
        fontSize: 12
    }
});

export default styles;
