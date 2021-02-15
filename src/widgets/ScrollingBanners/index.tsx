import React from 'react';
import styles from './styles';
import { View, Text, Image, FlatList } from 'react-native'
import { Link } from '@react-navigation/native';
import { NavigationInjectedProps } from 'react-navigation';

export interface ScrollingBannersProps{
    nav: any;
}

export class ScrollingBanners extends React.Component<ScrollingBannersProps> {
    render() {
        var dataSource=[];
        return (
            <View style={[styles.banners]}>
                <FlatList
                    data={dataSource}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <Link to="products" key={item}>
                            <View style={styles.banner}> 
                                <View style={[styles.product]}>
                                    <Image source={require('../../../assets/images/blazers.jpg')} resizeMode="cover" style={[styles.productImg]} />
                                    <View>
                                        <Text style={[styles.productType]}>Men Blazers</Text>
                                        <Text style={[styles.productRange]}>Starting from $150</Text>
                                    </View>
                                </View>
                            </View>
                        </Link>
                    }
                />
            </View>
        )
    }
}