import React, { Component } from 'react'
import styles from './styles'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { brandYellow } from '../../../../../theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
export interface ProductInfoProps{
    navigation:any;
}
export default class ProductInfo extends Component <ProductInfoProps>{
    render() {
        let carouselProps = {
            animate: false,
            indicatorSize: 30,
            indicatorOffset: 0,
            inactiveIndicatorColor: '#d8d8d8',
            indicatorColor: brandYellow
        }
        const data = [
            {
                value: 0,
                label: <View>
                    <Text style={[styles.size]}>Size 3</Text>
                </View>
            },
            {
                value: 1,
                label: <View>
                    <Text style={[styles.size]}>Size 4</Text>
                </View>
            },
            {
                value: 2,
                label: <View>
                    <Text style={[styles.size]}>Size 6</Text>
                </View>
            }
        ]
        return (
            <View style={[styles.container]}>
                <ScrollView style={{flex: 1}}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack()
                        }} >
                        <View style={[styles.backView]}>
                            <Icon name="chevron-left" style={[styles.backIcon]}/>
                            <Text style={[styles.back]}>Back</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.content]}>
                        {/* <View style={[styles.productgallery]}>
                            <Carousel {...carouselProps}>
                                {
                                    this.getSlides().map((slide, index) => {
                                        return (
                                            <View style={styles.slide} key={'slide' + index}>
                                                <Image source={slide.image} resizeMode="contain" style={styles.slideImg}/>
                                            </View>
                                        )
                                    })
                                }
                            </Carousel>
                        </View> */}
                        <View style={[styles.productPrice]}>
                            <Text style={[styles.productTitle]}>Kids White Jordan J23 Training Shoes</Text>
                            <Text style={[styles.productPriceText]}>Rs. 9995</Text>
                        </View>
                        {/* <View style={[styles.productSize]}>
                            <Text style={[styles.productTitle]}>Select Size</Text>
                            <List>
                                {data.map(i => (
                                    <RadioItem key={i.value} checked={value === i.value}
                                               onChange={() => this.onChange(i.value)}>
                                        {i.label}
                                    </RadioItem>
                                ))}
                            </List>
                        </View> */}
                        <View style={[styles.productDetails]}>
                            <Text style={[styles.productTitle]}>Product Details</Text>
                            <Text style={[styles.productText]}>A pair of white & grey training or gym shoes, has mid tops
                                styling detail</Text>
                            <Text style={[styles.productText]}>Synthetic upper</Text>
                            <Text style={[styles.productText]}>Cushioned footbed</Text>
                            <Text style={[styles.productText]}>Warranty: 6 months against manufacturing defects (not valid
                                on products with more than 20% discount)</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.actions]}>
                    <TouchableOpacity style={[styles.button, styles.saveBtn]}>
                                <Text style={[styles.buttonText]}>Save</Text>
                                </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]}
                            onPress={() => {
                                this.props.navigation.navigate('cart')
                            }}><Text style={[styles.buttonText]}>Add to Bag</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
