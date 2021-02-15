import React from 'react';
import styles from './styles';
import { View, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import { NavigationInjectedProps } from 'react-navigation';

export interface BigBannerProps{
    nav: NavigationInjectedProps;
}
export class BigBanner extends React.Component <BigBannerProps>{
    render() {
        return (
            <Link to="products">
            <View style={[styles.bigBannerBox]}>
                <View style={[styles.bigBanner]}>
                    <Image source={require('../../../assets/images/bigBanner.png')} style={[styles.bigBannerImg]} resizeMode="cover" />
                </View>
            </View>
        </Link>
        )
    }
}
