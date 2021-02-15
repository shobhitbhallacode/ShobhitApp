import React, { Component } from 'react'
import styles from './styles';
import {View,Text,ScrollView, TouchableOpacity} from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
export interface FilterProps {
    nav: NavigationInjectedProps;
}
export default class FilterCategories extends Component {
    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={[styles.category]}>
                    <Text style={[styles.categoryText]}>Brand</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.category]}>
                    <Text style={[styles.categoryText]}>Color</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.category]}>
                    <Text style={[styles.categoryText]}>Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.category]}>
                    <Text style={[styles.categoryText]}>Discount</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
