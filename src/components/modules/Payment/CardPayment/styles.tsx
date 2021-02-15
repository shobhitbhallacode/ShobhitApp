import React from 'react-native';
import { colorYellow } from '../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    totalAmount: {
        backgroundColor: '#D2E9B7',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    choose: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    bold: {
        fontWeight: 'bold'
    },
    card: {
        flex: 1,
        flexDirection: 'row'
    },
    cardImg: {
        width: 50,
        height: 32
    },
    cardNumber: {
        marginLeft: 20,
        marginTop: 8
    },
    addNewAction: {
        paddingLeft: 10,
    },
    addNewBtn: {
        width: 150,
        height: 30,
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderColor: colorYellow,
        borderWidth: 1,
    },
    addNewBtnText: {
        color: colorYellow,
        fontSize: 13
    }
});

export default styles;
