import  {StyleSheet} from 'react-native';
import { brandGrey, brandLightGrey } from '../../../../../theme/Colors';

var styles = StyleSheet.create({
    catgories: {
        backgroundColor: '#fafafa',
        padding: 10,
        paddingRight: 0,
        paddingLeft: 10
    },
    category: {
        width: 90,
        height: 65,
        backgroundColor: "#fff",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: brandLightGrey,
        marginRight: 10,
        overflow: 'hidden'
    },
    categoryImage: {
        height: 40,
        width: 88.2
    },
    categoryName: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        padding: 4,
        color: brandGrey
    },
});

export default styles;
