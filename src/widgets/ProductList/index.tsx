import React from 'react';
import styles from './styles';
import { View, Text, Image, Button } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

export interface ProductListProps{
    nav: any;
}
export class ProductList extends React.Component<ProductListProps> {
    render() {
        return (
            <View style={[styles.productList]}>
                <View style={[styles.product]}>
                    <Image source={require('../../../assets/images/blazers.jpg')} resizeMode="cover" style={[styles.productImg]} />
                    <View>
                        <Text style={[styles.productType]}>Men Blazers</Text>
                        <Text style={[styles.productRange]}>Starting from $150</Text>
                    </View>
                    <Button title="View All"
                        //style={[styles.button]}
                        //textStyle={[styles.buttonText]}
                        onPress={() => {
                            this.props.nav.navigation.navigate('products')
                        }} />
                </View>
                <View style={[styles.product]}>
                    <Image source={require('../../../assets/images/couple.jpg')} resizeMode="cover" style={[styles.productImg]} />
                    <View>
                        <Text style={[styles.productType]}>Dating Specials</Text>
                        <Text style={[styles.productRange]}>from $100 - $2500</Text>
                    </View>
                    <Button title="View All"
                        //  style={[styles.button]}
                        //  textStyle={[styles.buttonText]}
                        onPress={() => {
                            this.props.nav.navigation.navigate('products')
                        }} />
                </View>
                <View style={[styles.product]}>
                    <Image source={require('../../../assets/images/sets.jpg')} resizeMode="cover" style={[styles.productImg]} />
                    <View>
                        <Text style={[styles.productType]}>Men Fashion Kits</Text>
                        <Text style={[styles.productRange]}>Starting from $250</Text>
                    </View>
                    <Button title="View All"
                        //  style={[styles.button]}
                        //  textStyle={[styles.buttonText]}
                        onPress={() => {
                            this.props.nav.navigation.navigate('products')
                        }} />
                </View>
            </View>
        )
    }
}
