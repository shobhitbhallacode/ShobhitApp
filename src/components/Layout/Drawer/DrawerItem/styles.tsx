import { StyleSheet, Dimensions } from 'react-native';
import { colorYellow } from '../../../../../theme/Colors';

var styles = StyleSheet.create({
    drawerItemText: {
        color: 'rgba(0, 0, 0, 0.85)',
        fontSize: 13
    },
    drawerNavList: {
        flex: 1,
        paddingBottom: 120
    },
    drawerNavItem: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    drawerNavItemIcon: {
        marginRight: 10,
        marginTop: -2,
        width: 20,
        height: 20,
        fontSize: 20,
        color: colorYellow
    },
    drawerNavItemText: {
        fontSize: 15,
        color: '#707070'
    }
})

export default styles
