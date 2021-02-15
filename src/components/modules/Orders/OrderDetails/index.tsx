import React from 'react';
import styles from './styles';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { Steps } from '../../../Auth/Accounts/Contact/node_modules/antd-mobile';

const Step = Steps.Step;
const steps = [{
    title: 'Placed',
    description: '12th Dec',
}, {
    title: 'Shipped',
    description: '13th Dec',
}, {
    title: 'Delivery',
    description: '15th Dec',
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

export default class OrderDetails extends React.Component{
    render(){
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View style={[styles.content]}>
                        <View style={[styles.orderDetails]}>
                            <View>
                                <Text style={[styles.title]}>Shipment</Text>
                                <Text style={[styles.text]}>RS182812</Text>
                            </View>
                            <View>
                                <Text style={[styles.title]}>Status</Text>
                                <Text style={[styles.text]}>Shipped</Text>
                            </View>
                            <View>
                                <Text style={[styles.title]}>Items</Text>
                                <Text style={[styles.text]}>2</Text>
                            </View>
                            <View>
                                <Text style={[styles.title]}>Total</Text>
                                <Text style={[styles.text]}>Rs 8,245</Text>
                            </View>
                        </View>
                        <View style={[styles.orderedProducts]}>
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
                                                <Text>Size: L</Text>
                                            </View>
                                            <View>
                                                <Text>Quantity: 2</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.productPrice]}>
                                            <Text style={[styles.currentPrice]}>Rs 8,245</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.actions]}>
                                    <Button
                                        title="CANCEL"
                                        // style={[styles.button, styles.saveBtn]}
                                        //   textStyle={[styles.buttonText, styles.black]}
                                        onPress={() => { }} />
                                    <Button title="RE-ORDER"
                                        // style={[styles.button]}
                                        // textStyle={[styles.buttonText, styles.black]}
                                        onPress={() => { }} />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.progress]}>
                            <Steps current={1} direction="horizontal" size="small">{steps}</Steps>
                        </View>
                        <View style={[styles.progressDetails]}>
                            <Text style={[styles.progressTitle]}>Shipped on 13th Dec</Text>
                            <Text>Your order has been shipped. Will be deliver to you by 15th Dec.</Text>
                        </View>
                        <View style={[styles.payment]}>
                            <Text style={[styles.label]}>Payment Status</Text>
                            <Text>Not Paid (Cash on Delivery)</Text>
                        </View>
                        <View style={[styles.payment]}>
                            <Text style={[styles.label]}>Tracking ID</Text>
                            <Text>13177879891111</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
} 