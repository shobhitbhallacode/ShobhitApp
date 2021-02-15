import { brandLightGrey, brandRed, brandYellow } from '../../../../../theme/Colors';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
    },
    content: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    button: {
        backgroundColor: brandYellow,
        borderRadius: 0
    },
    form: {
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 0,
    },
    field: {},
    fieldLabel: {
        color: brandRed,
        marginBottom: 5
    },
    input: {
        marginBottom: 25,
        borderWidth: 0,
        borderBottomWidth: 1,
        padding: 0,
        paddingLeft: 0,
        height: 30
    },
    imageBox: {
        marginTop: 20,
        marginBottom: 50
    },
    image: {
        borderColor: brandLightGrey,
        borderWidth: 1,
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        alignSelf: 'center'
    },
    changeImageLink:{
        alignSelf:'center',
        marginTop:15
    },
    text:{
        color:brandRed
    }
});
export default styles;
