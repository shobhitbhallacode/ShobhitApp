import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import { Icon } from 'expo';
import { Link } from '@react-navigation/native';


export default class PaymentOptions extends React.Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.totalAmount]}>
                    <Text style={[styles.bold]}>You Pay</Text>
                    <Text style={[styles.bold]}>Rs 8,045</Text>
                </View>
                <View>
                    <View style={[styles.choose]}>
                        <Text>Choose Payment Mode</Text>
                    </View>
                    <Link to="cardPayment">
                        <View style={[styles.listItem, styles.firstItem]}>
                            <Text style={[styles.categoryName]}>Credit Card</Text>
                            <Icon type="simple-line-icons" name="arrow-right" style={[styles.leftArrow]} />
                        </View>
                    </Link>
                    <Link to="cardPayment">
                        <View style={[styles.listItem]}>
                            <Text style={[styles.categoryName]}>Debit Card</Text>
                            <Icon type="simple-line-icons" name="arrow-right" style={[styles.leftArrow]} />
                        </View>
                    </Link>
                    <Link to="netBanking">
                        <View style={[styles.listItem]}>
                            <Text style={[styles.categoryName]}>Net Banking</Text>
                            <Icon type="simple-line-icons" name="arrow-right" style={[styles.leftArrow]} />
                        </View>
                    </Link>
                    <Link to="cashOnDelivery">
                        <View style={[styles.listItem]}>
                            <Text style={[styles.categoryName]}>Cash on Delivery</Text>
                            <Icon type="simple-line-icons" name="arrow-right" style={[styles.leftArrow]} />
                        </View>
                    </Link>
                    <Link to="payPal">
                        <View style={[styles.listItem]}>
                            <Text style={[styles.categoryName]}>Paypal</Text>
                            <Icon type="simple-line-icons" name="arrow-right" style={[styles.leftArrow]} />
                        </View>
                    </Link>
                </View>
            </View>
        )
    }
}
