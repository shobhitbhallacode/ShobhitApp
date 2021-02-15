import  {StyleSheet} from 'react-native';
import { brandLightGrey, brandYellow } from '../../../../../theme/Colors';

var styles = StyleSheet.create({
    footer: {
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: brandLightGrey
    },
    footerLink: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'stretch'
    },
    icon: {
        fontSize: 20,
        color: brandYellow
    },
    text: {
        marginLeft: 10,
        marginTop: 1
    }
});

export default styles;
