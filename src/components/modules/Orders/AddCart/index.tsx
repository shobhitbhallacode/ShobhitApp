import React from 'react';
import styles from './styles';
import { View, Text, Image, ScrollView, Button } from 'react-native';
//import { CreditCardInput } from "react-native-credit-card-input";
export interface AddCardProps {
    navigation: any;
}
export default class AddCard extends React.Component<AddCardProps>{
    render() {
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
                                <Text>Add Card Details</Text>
                            </View>
                            {/* <CreditCardInput /> */}
                        </View>
                    </View>
                </ScrollView>
            {/* <CreditCardInput></CreditCardInput> */}
                <View >
                    <Button title="Continue to Pay" onPress={() => {
                        this.props.navigation.navigate('orderDetails')
                    }}>
                    </Button>
                </View>
            </View>
        )
    }
}
