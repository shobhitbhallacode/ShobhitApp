import React, { Component } from 'react'
import styles from './styles';
import {View, Text, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { NavigationInjectedProps, NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
export interface AddCouponProps {
    nav: NavigationInjectedProps;
}

export default class AddCoupon extends Component <AddCouponProps>{
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View>
                        <View style={[styles.form]}>
                            <TouchableOpacity>
                                <Text>Apply</Text>
                            </TouchableOpacity>
                            <TextInput></TextInput>
                        </View>
                        <View style={[styles.couponList]}>
                            <Text style={[styles.title]}>Available Coupons</Text>
                            <View style={[styles.coupon,styles.available]}>
                                <Text style={[styles.offer]}>Flat 20% Off</Text>
                                <Text style={[styles.description]}>Available on Women Dresses and Bags</Text>
                                <Text style={[styles.code]}>ARIVAA20</Text>
                            </View>
                            <View style={[styles.coupon,styles.available]}>
                                <Text style={[styles.offer]}>Flat Rs 200 off</Text>
                                <Text style={[styles.description]}>Happy Hours Rs 200 Off</Text>
                                <Text style={[styles.code]}>ARIVA200</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
