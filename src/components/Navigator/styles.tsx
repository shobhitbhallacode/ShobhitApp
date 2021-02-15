import React from 'react-native';
import { Platform, StatusBar } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { brandColor, brandFacebook, brandGoogle, brandLightGrey, brandRed, brandYellow, colorYellow } from '../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    header: {
        height: (Platform.OS === 'ios') ? 60 : 50,
        borderColor: brandLightGrey,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerLeftText: {
        position: 'absolute',
        left: 5,
        top: (Platform.OS === 'ios') ? 22 : 10,
        zIndex: 1,
        flexDirection: 'row',
    },
    headerLeftIcon: {
        top: (Platform.OS === 'ios') ? 30 : 15,
    },
    headerRightText: {
        position: 'absolute',
        right: 5,
        top: (Platform.OS === 'ios') ? 28 : 16,
        flexDirection: 'row',
    },
    headerRightIcon: {
        top: (Platform.OS === 'ios') ? 20 : 5,
    },
    drawerHeader: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 20,
        borderColor: '#e9e9e9',
        borderBottomWidth: 1,
        ...ifIphoneX({
            paddingTop: 40
        }),
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    drawerLogo: {
        fontSize: 30,
        color: brandRed,
        marginTop: 4,
        marginLeft: 10
    },
    drawerProfileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 0
    },
    filterText: {
        fontSize: 14,
        marginTop: (Platform.OS === 'ios') ? 12 : 8,
        marginLeft: 10
    },
    clearText: {
        fontSize: 12,
        marginTop: 6
    },
    closeIcon: {
        fontSize: 30,
        width: 40,
        textAlign: 'center',
        color: brandYellow,
        marginTop: 4
    },
    homeIcon: {
        fontSize: 25,
        width: 40,
        textAlign: 'center',
        color: brandYellow,
        marginTop: (Platform.OS === 'ios') ? 6 : 0,
    },
    applybutton: {
        height: 25,
        width: 70,
        marginLeft: 15
    },
    applybuttonStyle: {
        fontSize: 12
    },
    headerIcons: {
        width: 40,
        height: 40
    },
    headerDrawerIcon: {
        width: 28,
        height: 28,
        marginTop: 4
    },
    headerNav: {
        paddingTop: 0
    },
    menuIcon: {
        fontSize: 20,
        color: brandYellow,
        marginLeft: 20
    },
    menuIconSearch: {
        fontSize: 25,
        marginTop: -2,
        width: 30,
        height: 30
    },
    menuIconCart: {
        fontSize: 20,
        marginTop: -1
    },
    count: {
        position: 'absolute',
        right: -18,
        top: -8,
        backgroundColor: brandRed,
        borderRadius: 50,
        width: 20,
        height: 20,
        overflow: 'hidden'
    },
    value: {
        color: '#fff',
        textAlign: 'center',
        lineHeight: (Platform.OS === 'ios') ? 20 : 17,
        fontSize: 12,
        fontWeight: 'bold'
    },
    logoContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 180,
        alignSelf: 'center'
    },
    form: {
        alignSelf: 'stretch',
        margin: 10
    },
    input: {
        borderColor: brandColor,
        marginBottom: 10
    },
    inputIcon: {
        color: '#bebac2'
    },
    lockIcon: {
        fontSize: 25,
        marginTop: -4
    },
    button: {
        backgroundColor: colorYellow,
        marginBottom: 10
    },
    facebookText: {
    },
    facebookBtn: {
        backgroundColor: brandFacebook
    },
    googleBtn: {
        backgroundColor: brandGoogle
    },
    black: {
        color: '#333'
    },
    forgotPassword: {
        color: '#e6e6e6',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        marginBottom: 20
    },
    option: {
        flexDirection: 'row'
    },
    optionText: {
        fontWeight: 'bold',
        color: '#e6e6e6'
    },
    action: {
        color: colorYellow
    },
    login: {
        margin: 20
    },
    buttonText: {
        color: brandYellow
    }
});

export default styles;
