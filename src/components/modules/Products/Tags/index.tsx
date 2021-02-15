import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
export interface ProductsProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Tags extends Component <ProductsProps>{
    render() {
        return (
            <View style={[styles.tagList]}>
                <View style={[styles.tag]}>
                    <Text style={[styles.tagText]}>30% off</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="x" style={[styles.remove]} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.tag]}>
                    <Text style={[styles.tagText]}>Black</Text>
                    <TouchableOpacity>
                        <Icon name="x" style={[styles.remove]} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.tag]}>
                    <Text style={[styles.tagText]}>Logout</Text>
                    <TouchableOpacity>
                        <Icon name="x" style={[styles.remove]} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}