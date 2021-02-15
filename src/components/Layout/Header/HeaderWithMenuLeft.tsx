import React from 'react';
import styles from './styles';
import { View, Text, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps } from "react-navigation";
import { FontAwesome } from '@expo/vector-icons'; 

export function HeaderWithMenuLeft(navigation: any, route:any) {
    return (
            <View style={[styles.headerLeftText, styles.headerLeftIcon]}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.openDrawer();
                    }}>
                    <Icon name="navicon"
                        style={[styles.menuIcon, styles.menuIconSearch]} />
                </TouchableOpacity>
            </View>
    )
} 