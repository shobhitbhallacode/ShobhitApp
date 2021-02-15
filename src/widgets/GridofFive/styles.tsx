import  {StyleSheet} from 'react-native';
import { brandGrey, brandLightGrey } from '../../../theme/Colors';

var styles = StyleSheet.create({
    gridofSix: {
        backgroundColor: '#fafafa',
        padding: 10
    },
    gridHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10
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
    gridBody: {
        backgroundColor: "#fff",
        alignSelf: 'stretch',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: brandLightGrey
    },
    gridContent: {
        padding: 10,
        paddingBottom: 0,
        paddingTop: 18
    },
    gridCol: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    gridItem: {
        width: 100,
        height: 160,
        backgroundColor: '#fafafa',
        borderRadius: 4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: brandLightGrey
    },
    gridImg: {
        flex: 1
    },
    productBox: {
        paddingTop: 4,
        paddingLeft: 4,
        paddingBottom: 4,
        backgroundColor: '#fff'
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
});

export default styles;
