import React, {StyleSheet} from 'react-native';
 
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    form: {
        padding: 10
    },
    input: {
        paddingLeft: 10,
        marginBottom: 10
    },
    couponList: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#e9e9e9',
        backgroundColor: '#fff',
        padding: 10,
        paddingTop:20,
        paddingBottom:0
    },
    title: {
        marginBottom: 20
    },
    coupon: {
        borderWidth: 2,
        borderColor: '#e9e9e9',
        borderRadius: 4,
        padding: 10,
        marginBottom:20
    },
    available: {
        borderColor: '#cde4b2',
        backgroundColor: '#fbfff6'
    },
    offer: {
        marginBottom: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },
    description: {
        marginBottom: 5,
        fontSize: 13
    },
    code: {
        backgroundColor: '#cde4b2',
        alignSelf: 'flex-end',
        padding: 10,
        fontWeight: 'bold',
        marginTop: 10
    }
});

export default styles;
