import React from 'react';
import styles from './styles';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { List, Radio } from '../../../Auth/Accounts/Contact/node_modules/antd-mobile';

const RadioItem = Radio.RadioItem;
export interface CashOnDeliveryProps {
    navigation: any;
}
export default class CashOnDelivery extends React.Component<CashOnDeliveryProps>{
    render() {
        const data = [
            {
                value: 0,
                label: <View style={[styles.bank]}>
                    <Text style={[styles.cash]}>$$</Text>
                    <Text style={[styles.bankName]}>Cash On Delivery</Text>
                </View>
            }
        ];
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View >
                        <View style={[styles.totalAmount]}>
                            <Text style={[styles.bold]}>You Pay</Text>
                            <Text style={[styles.bold]}>Rs 8,045</Text>
                        </View>
                        <View>
                            <View style={[styles.choose]}>
                                <Text style={[styles.paypal]}>Cash on delivery - pay the total amount in cash at the time of delivery.</Text>
                            </View>
                            <List>
                                {data.map(i => (
                                    <RadioItem key={i.value}>
                                        {i.label}
                                    </RadioItem>
                                ))}
                            </List>
                        </View>
                    </View>
                </ScrollView>
                <View >
                    <Button title="Continue to Pay"
                        onPress={() => {
                            this.props.navigation.navigate('orderDetails')
                        }} />
                </View>
            </View>
        )
    }
} 