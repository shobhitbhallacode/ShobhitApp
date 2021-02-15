import React from 'react';
import styles from './styles';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { List, Radio } from '../../../Auth/Accounts/Contact/node_modules/antd-mobile';

export interface PayPalProps {
    navigation: any;
}
export default class PayPal extends React.Component<PayPalProps> {
    render() {
        const RadioItem = Radio.RadioItem;
        const data = [
            {
                value: 0,
                label: <View style={[styles.bank]}>
                    <Image source={{ uri: '../../../../../paypal.png' }} resizeMode={'contain'} style={[styles.bankImg]} />
                    <Text style={[styles.bankName]}>PayPal</Text>
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
                                <Text style={[styles.paypal]}>PayPal - pay securely without sharing your financial information.</Text>
                            </View>
                            <List>
                                {data.map(i => (
                                    <RadioItem key={i.value} >
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