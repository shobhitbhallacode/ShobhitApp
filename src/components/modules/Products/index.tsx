import React from 'react';
import styles from './styles';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Footer from './ProductFooter';
import ProductGrid from './ProductGrid';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tags from './Tags';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
//import Gallery from 'react-native-image-gallery';
 
export interface ProductsProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

export default class Products extends React.Component<ProductsProps> {
    state = {
        items: Array.from({ length: 20 })
    };
    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 1500);
    };
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack()
                        }} >
                        <View style={[styles.backView]}>
                            <Icon name="chevron-left" style={[styles.backIcon]} />
                            <Text style={[styles.back]}>Back</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <Tags navigation={this.props.navigation} />
                    <ProductGrid />               
                    <Footer />
                </ScrollView>
            </View>
        )
    }
}

