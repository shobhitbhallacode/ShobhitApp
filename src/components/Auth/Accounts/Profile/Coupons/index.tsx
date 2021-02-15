import React, { Component } from 'react'
import styles from './styles';
import { View, Text, Image } from 'react-native';
import { NavigationInjectedProps, NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
export interface CouponsProps {
    nav: NavigationInjectedProps;
}

export default class Coupons extends Component <CouponsProps>{
    render() {
        return (
            <View>
                <View style={[styles.imageBox]}>
                    <Image source={require('../../../../../../assets/images/user2.jpg')} style={[styles.image]} />
                </View>
                <Text style={[styles.title]}>Your Saved Coupons</Text>
                <View style={[styles.couponList]}>
                    <View style={[styles.coupon, styles.available]}>
                        <Text style={[styles.offer]}>Flat 20% Off</Text>
                        <Text style={[styles.description]}>Available on Women Dresses and Bags</Text>
                        <Text style={[styles.code]}>ARIVAA20</Text>
                    </View>
                    <View style={[styles.coupon, styles.available]}>
                        <Text style={[styles.offer]}>Flat Rs 200 off</Text>
                        <Text style={[styles.description]}>Happy Hours Rs 200 Off</Text>
                        <Text style={[styles.code]}>ARIVA200</Text>
                    </View>
                </View>
            </View>
        )
    }
}
