import React, {Dimensions, StyleSheet} from 'react-native';
import { brandLightGrey } from '../../../../theme/Colors';
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
    filters: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    filterCategories: {
        backgroundColor: '#f7f7f7',
        height: screenHeight - 40,
        borderColor: brandLightGrey,
        borderRightWidth: 1
    },
    filterCategoriesData: {
        backgroundColor: '#fff',
        height: screenHeight - 40
    }
});

export default styles;
