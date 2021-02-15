import React from 'react';
import styles from './styles';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps, NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
export interface AddAddressProps {
    nav: NavigationInjectedProps;
}
export default class Address extends React.Component<AddAddressProps>{
    constructor(props: any) {
        super(props)
    }
    state = {
        addresses: [
            {
                street: "House No. 70",
                nearBy: "Near Boston Metro Station",
                city: "Boston MA",
                pincode: "42323",
                phone: "6789054321"
            },
            {
                street: "House No. 71",
                nearBy: "Near New York Metro Station",
                city: " New York MA",
                pincode: "42323",
                phone: "6789054321"
            }
        ],
        selectedAddress: 0
    }
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View style={[styles.content]}>
                        <View>
                            <View>
                                {
                                    this.state.addresses.map((address, index) => {
                                        return (
                                            <TouchableOpacity key={index}
                                                onPress={() => { this.setState({ selectedAddress: index }) }} style={[styles.addressItem, this.state.selectedAddress == index ? styles.selectedAddress : null]}>
                                                <View>
                                                    <View>
                                                        <Text style={[styles.address]}>{address.street}</Text>
                                                        <Text style={[styles.address]}>{address.nearBy}</Text>
                                                        <Text style={[styles.address]}>{address.city}</Text>
                                                        <Text style={[styles.address]}>{address.pincode}</Text>
                                                        <Text style={[styles.address]}>Ph: {address.phone}</Text>
                                                    </View>
                                                    <TouchableOpacity style={[styles.addressAction]}>
                                                        <Icon style={[styles.icon]}
                                                            name="trash" />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={[styles.addressAction, styles.editAddress]}>
                                                        <Icon style={[styles.icon]}
                                                            name="edit-2" />
                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>

                                        )
                                    })
                                }
                            </View>
                        </View>
                        <View style={[styles.addNewAction]}>
                            <TouchableOpacity
                                style={[styles.button, styles.addNewBtn]}
                                onPress={() => {
                                    this.props.nav.navigation.navigate('addAddress')
                                }}>
                                <Text style={[styles.addNewBtnText]} >+ Add New</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <TouchableOpacity style={[styles.button]}
                        onPress={() => {
                            this.props.nav.navigation.navigate('paymentOptions')
                        }} >
                        <Text>Continue to Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
