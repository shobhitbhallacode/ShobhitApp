import React, {StyleSheet} from 'react-native';
import { brandGreen } from '../../../../../theme/Colors';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    gift: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    cost: {
        color: brandGreen,
        fontWeight: 'bold',
        marginTop: 10
    },
    text: {
        lineHeight: 20,
        color: '#555555'
    },
    message: {
        padding: 10,
    },
    textArea: {
        marginTop: 10,
        minHeight:200,
        borderBottomWidth: 0,
        fontSize: 14,
        marginLeft: -12
    }
});

export default styles;
