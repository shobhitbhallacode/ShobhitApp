import React, { Component } from 'react';
import styles from './styles';
import { View, Image } from 'react-native';
import {
    NavigationInjectedProps,
  } from "react-navigation";

export interface SplashProps {
    nav: NavigationInjectedProps;
}
export default class Splash extends Component<SplashProps> {
    componentDidMount() {
        setTimeout(() => {
            this.props.nav.navigation.navigate('Login');
        }, 500)
    }
    render() {
        return (
            <View style={[styles.splashView]}>
                <View style={[styles.logoContainer]}>
                    <Image
                        source={require('../../../../assets/images/arivaa-ecommerce-logo.png')}
                        resizeMode={'contain'}
                        style={[styles.logo]} />
                </View>
            </View>
        )
    }
}
