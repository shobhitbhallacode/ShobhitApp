import React from 'react';
import styles from './styles';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { List, Radio } from '../../../Auth/Accounts/Contact/node_modules/antd-mobile';

const RadioItem = Radio.RadioItem;
export interface NetBankingProps {
    navigation: any;
}
export default class NetBanking extends React.Component<NetBankingProps> {
    render() {
        const data = [
            {
                value: 0,
                label: <View style={[styles.bank]}>
                    <Image source={{ uri: '../../../../../yesBank.png' }} resizeMode={'contain'} style={[styles.bankImg]} />
                    <Text style={[styles.bankName]}>Yes Bank</Text>
                </View>
            },
            {
                value: 1,
                label: <View style={[styles.bank]}>
                    <Image source={{ uri: '../../../../../icici.png' }} resizeMode={'contain'} style={[styles.bankImg]} />
                    <Text style={[styles.bankName]}>ICICI Bank</Text>
                </View>
            },
            {
                value: 2,
                label: <View style={[styles.bank]}>
                    <Image source={{ uri: '../../../../../axis.png' }} resizeMode={'contain'} style={[styles.bankImg]} />
                    <Text style={[styles.bankName]}>Axis Bank</Text>
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
                                <Text>Select Your Bank</Text>
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