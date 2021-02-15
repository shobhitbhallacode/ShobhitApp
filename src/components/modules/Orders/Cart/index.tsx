import React from 'react';
import styles from './styles';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export interface CartProps {
    navigation: any;
}
export default class Cart extends React.Component<CartProps>{
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View style={[styles.content]}>
                        <View style={[styles.total]}>
                            <Text>Items ( 1 )</Text>
                            <Text>Total : <Text style={[styles.totalAmount]}>Rs 8,245</Text></Text>
                        </View>
                        <View>
                            <View style={[styles.productItem]}>
                                <View style={[styles.productCard]}>
                                    <View style={[styles.productImageContainer]}>
                                        <Image source={require('../../../../../assets/images/top1.jpg')} style={[styles.productImage]} />
                                    </View>
                                    <View style={[styles.productDetails]}>
                                        <Text style={[styles.productTitle]}>Designer top from Italy, handcrafted, pure
                                            cotton.</Text>
                                        <Text style={[styles.productSeller]}>Sold by : Italy Fibres</Text>
                                        <View style={[styles.selection]}>
                                            <View style={[styles.size]}>
                                                <Text>Size: </Text>
                                            </View>
                                            <View>
                                                <Text>Quantity: </Text>
                                            </View>
                                        </View>
                                        <View style={[styles.productPrice]}>
                                            <Text style={[styles.currentPrice]}>Rs 8,245</Text>
                                            <Text style={[styles.orginalPrice]}>Rs 15,000</Text>
                                            <Text style={[styles.percentageOff]}>30% Off</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.actions]}>
                                    <TouchableOpacity style={[styles.button, styles.saveBtn]}>
                                        <Text style={[styles.buttonText]}>REMOVE</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.button]}>
                                        <Text style={[styles.buttonText]}>MOVE TO WISHLIST</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.optionLabel]}>Options</Text>
                            <View style={[styles.optionList]}>
                                <View style={[styles.option]}>
                                    <TouchableOpacity>
                                        <View style={[styles.optionData]}>
                                            <Icon style={[styles.optionIcon]}
                                                name="tag" />
                                            <Text style={[styles.optionText]}>Apply Coupon</Text>
                                            <Icon style={[styles.optionAction]}
                                                name="arrow-right" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.option, styles.noBorder]}>
                                    <TouchableOpacity>
                                        <View style={[styles.optionData]}>
                                            <Icon style={[styles.optionIcon]}
                                                name="gift" />
                                            <Text style={[styles.optionText]}>Gift Order</Text>
                                            <Icon style={[styles.optionAction]}
                                                name="arrow-right" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.priceDetailsLabel]}>Price Details</Text>
                            <View style={[styles.priceCalculations]}>
                                <View style={[styles.priceItem]}>
                                    <Text style={[styles.priceItemText]}>Total Amount</Text>
                                    <Text style={[styles.priceItemText]}>Rs 8,245</Text>
                                </View>
                                <View style={[styles.priceItem]}>
                                    <Text style={[styles.priceItemText]}>Discount Available</Text>
                                    <Text style={[styles.priceItemText]}>- Rs 200</Text>
                                </View>
                                <View style={[styles.priceItem]}>
                                    <Text style={[styles.priceItemText]}>Sub Total</Text>
                                    <Text style={[styles.priceItemText]}>Rs 8,045</Text>
                                </View>
                                <View style={[styles.priceItem]}>
                                    <Text style={[styles.priceItemText]}>Coupon Discount</Text>
                                    <Text style={[styles.priceItemText]}>-</Text>
                                </View>
                                <View style={[styles.priceItem]}>
                                    <Text style={[styles.priceItemText]}>Delivery Cost</Text>
                                    <Text style={[styles.priceItemText]}>Free</Text>
                                </View>
                                <View style={[styles.priceItem]}>
                                    <Text style={[styles.priceItemText, styles.boldText]}>Total Payable</Text>
                                    <Text style={[styles.priceItemText, styles.highlightText, styles.boldText]}>Rs
                                        8,045</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.actions]}>
                    <TouchableOpacity style={[styles.button, styles.yellowBtn]}
                        onPress={() => { this.props.navigation.navigate('address') }}>
                        <Text style={[styles.buttonText, styles.white]}>Place Order (Total : Rs 8,045)</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
