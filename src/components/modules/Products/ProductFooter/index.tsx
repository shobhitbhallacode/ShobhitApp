import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import { Link } from '@react-navigation/native';

export default class Footer extends React.Component {
    render() {
        return (
            <View style={[styles.footer]}>
                <View style={[styles.footerLink]}>
                    {/* <Icon type="font-awesome" name="sort" style={[styles.icon]} /> */}
                    <Text style={[styles.text]}>Sort</Text>
                </View>
                <View style={[styles.footerLink]}>
                    {/* <Icon type="ionicons" name="ios-funnel" style={[styles.icon]} /> */}
                    <Text style={[styles.text]}>Filter</Text>
                </View>
            </View>
        )
    }
}