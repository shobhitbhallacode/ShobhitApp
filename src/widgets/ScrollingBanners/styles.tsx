import  {StyleSheet} from 'react-native';
import { brandGrey, brandLightGrey } from '../../../theme/Colors';

var styles = StyleSheet.create({
    banners: {
        backgroundColor: '#D2E9B7',
        padding: 10,
        paddingRight: 0,
        paddingLeft: 10
    },
    banner: {
        width: 220,
        height: 85,
        backgroundColor: "#fff",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: brandLightGrey,
        marginRight: 10,
        overflow: 'hidden'
    },
    bannerImage: {
        height: 40,
        width: 88.2
    },
    bannerName: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        padding: 4,
        color: brandGrey
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
    }
});

export default styles;
