import  {StyleSheet, Platform} from 'react-native';
import { colorYellow } from '../../../../theme/Colors';
var styles = StyleSheet.create({
    container: {
        flex: 1
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
        color: colorYellow
    },
    backIcon: {
        fontSize: 20,
        lineHeight: Platform.OS === 'ios' ? 35 : 40,
        marginLeft: 10,
        color: colorYellow
    }
})

export default styles
