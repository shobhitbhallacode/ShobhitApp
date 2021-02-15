import React from 'react'
import styles from './styles'
import { View, Text, Image, FlatList, Button } from 'react-native'
import { Link } from '@react-navigation/native';
import { NavigationInjectedProps } from "react-navigation";

export interface GridandScrollProps{
    nav: any;
}
export class GridandScroll extends React.Component <GridandScrollProps>{
DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image:'https://reactnative.dev/img/tiny_logo.png'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image:'https://reactnative.dev/img/tiny_logo.png'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://reactnative.dev/img/tiny_logo.png'
  },
];

    render() {
        return (
            <View style={[styles.gridandScroll]}>
                <View style={[styles.gridHeader]}>
                    <Text style={[styles.gridTitle]}>Women Specials</Text>
                    <Button title="View All"
                        //   style={[styles.gridbutton]}
                        //   textStyle={[styles.gridbuttonStyle]}
                        onPress={() => {
                            this.props.nav.navigation.navigate('products')
                        }} />
                </View>
                <View style={[styles.bigBannerBox]}>
                    <Link to="products">
                        <View style={[styles.bigBanner]}>
                            <Image source={require('../../../assets/images/banner.jpg')} style={[styles.bigBannerImg]} resizeMode="cover" />
                        </View>
                    </Link>
                </View>
                <View style={[styles.productInfo]}>
                    <Text style={[styles.productInfoTitle]}>Women Special Collection by Azzeo</Text>
                    <Text style={[styles.productInfoText]}>Discover new range of clothing in comfortable styles and
                        traditional fabrics.</Text>
                </View>
                <View style={[styles.products]}>
                    <FlatList
                        data={this.DATA}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <Link to="products" key={item.id}>
                                <View style={styles.product}>
                                    <Image source={{uri: item.image}} style={[styles.productImage]} resizeMode="cover" />
                                    <View style={[styles.productDetails]}>
                                        <Text style={[styles.productName]}>{item.title}</Text>
                                        <Text style={[styles.productPrice]}>{item.title}</Text>
                                    </View>
                                </View>
                            </Link>
                        }
                    />
                </View>
            </View>
        )
    }
}
