import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CategoriesList extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { }} >
                    <View style={[styles.listItem]}>
                        <Text style={[styles.categoryName]}>Topwear</Text>
                        <Icon name="arrow-right" style={[styles.leftArrow]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={[styles.listItem]}>
                        <Text style={[styles.categoryName]}>Footwear</Text>
                        <Icon name="arrow-right" style={[styles.leftArrow]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.listItem]}>
                        <Text style={[styles.categoryName]}>Bands</Text>
                        <Icon name="arrow-right" style={[styles.leftArrow]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={[styles.listItem]}>
                        <Text style={[styles.categoryName]}>Caps</Text>
                        <Icon name="arrow-right" style={[styles.leftArrow]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={[styles.listItem]}>
                        <Text style={[styles.categoryName]}>Bags</Text>
                        <Icon name="arrow-right" style={[styles.leftArrow]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={[styles.listItem]}>
                        <Text style={[styles.categoryName]}>Watches</Text>
                        <Icon name="arrow-right" style={[styles.leftArrow]} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}