import React from 'react-native';
import {Platform} from 'react-native';
import { brandLightGrey, brandYellow } from '../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    header: {
        height: (Platform.OS === 'ios') ? 60 : 50,
        borderColor: brandLightGrey,
        borderBottomWidth: 1,
    },
    headerLeftText: {
        position: 'absolute',
        left: 0,
        top: (Platform.OS === 'ios') ? 22 : 10,
        zIndex: 1,
        flexDirection: 'row',
    },
    headerRightText: {
        position: 'absolute',
        right: 5,
        top: (Platform.OS === 'ios') ? 28 : 16,
        flexDirection: 'row',
    },
    filterText: {
        fontSize: 12,
        marginTop: 12,
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
    applybutton: {
        height: 25,
        width: 70,
        marginLeft: 15
    },
    applybuttonStyle: {
        fontSize: 12
    }
});

export default styles;
