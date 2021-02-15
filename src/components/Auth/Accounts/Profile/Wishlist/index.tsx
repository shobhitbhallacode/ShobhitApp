import React from 'react'
import styles from './styles';
import { View, Text, Image } from 'react-native';
import WishlistGrid from './WishlistGrid';
import { NavigationInjectedProps } from 'react-navigation';
export interface WishlistProps {
    nav: NavigationInjectedProps;
}
export default class Wishlist extends React.Component<WishlistProps> {
    render() {
        return (
            <View>
                <View style={[styles.imageBox]}>
                    <Image source={require('../../../../../../assets/images/user2.jpg')} style={[styles.image]} />
                </View>
                <Text style={[styles.title]}>Your Wish List</Text>
                <WishlistGrid />
            </View>
        )
    }
}
