import { StyleSheet } from 'react-native';
import { brandLightGrey, brandRed, brandYellow } from '../../../../../../theme/Colors';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    choose: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    bold: {
        fontWeight: 'bold'
    },
    list: {
        borderTopWidth: 1,
        borderColor: '#e6e6e6'
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#e6e6e6'
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
        borderColor: brandYellow,
        borderWidth: 1,
    },
    addNewBtnText: {
        color: brandYellow,
        fontSize: 13
    },
    title: {
        padding: 10,
        fontWeight: 'bold',
        color: brandRed
    },
    imageBox: {
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#fafafa',
        padding: 10
    },
    image: {
        borderColor: brandLightGrey,
        borderWidth: 1,
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        alignSelf: 'center'
    }
});

export default styles;
