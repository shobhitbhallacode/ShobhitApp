import React from 'react';
import styles from './styles';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { List, Radio } from '../../../Auth/Accounts/Contact/node_modules/antd-mobile';

export interface CardPaymentProps {
    navigation: any;
}
export default class CardPayment extends React.Component<CardPaymentProps>{
    render() {
        const RadioItem = Radio.RadioItem;
        const data = [
            {
                value: 0,
                label: <View style={[styles.card]}>
                    <Image source={{ uri: '../../../../../assets/images/visa.png' }} resizeMode={'contain'} style={[styles.cardImg]} />
                    <Text style={[styles.cardNumber]}>4123 XXXX XXXX 4321</Text>
                </View>
            },
            {
                value: 1,
                label: <View style={[styles.card]}>
                    <Image source={{ uri: '../../../../../master.png' }} resizeMode={'contain'} style={[styles.cardImg]} />
                    <Text style={[styles.cardNumber]}>4123 XXXX XXXX 4321</Text>
                </View>
            },
            {
                value: 2,
                label: <View style={[styles.card]}>
                    <Image source={{ uri: '../../../../../maestro.png' }} resizeMode={'contain'} style={[styles.cardImg]} />
                    <Text style={[styles.cardNumber]}>4123 XXXX XXXX 4321</Text>
                </View>
            }
        ];
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View>
                        <View style={[styles.totalAmount]}>
                            <Text style={[styles.bold]}>You Pay</Text>
                            <Text style={[styles.bold]}>Rs 8,045</Text>
                        </View>
                        <View>
                            <View style={[styles.choose]}>
                                <Text>Select Previously Used Card</Text>
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
                    <View>
                        <View style={[styles.choose]}>
                            <Text>Use New Card</Text>
                        </View>
                        <View style={[styles.addNewAction]}>
                            <Button title="+ Use New Card" onPress={() => {
                                this.props.navigation.navigate('orderDetails')
                            }}></Button>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Button title="Continue to Pay"
                        onPress={() => {
                            this.props.navigation.navigate('orderDetails')
                        }} />
                </View>
            </View>
        )
    }
}
