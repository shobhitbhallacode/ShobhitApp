import React, { Component } from 'react'
import styles from './styles';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { List, Radio } from 'antd-mobile';
import { NavigationInjectedProps } from 'react-navigation';
export interface CardsProps {
    nav: NavigationInjectedProps;
}
export default class Cards extends Component<CardsProps> {
    render() {
        const data = [
            {
                value: 0,
                label: <View style={[styles.card]}>
                    <Image source={require('../../../../../../assets/images/visa.png')} resizeMode={'contain'} style={[styles.cardImg]} />
                    <Text style={[styles.cardNumber]}>4123 XXXX XXXX 4321</Text>
                </View>
            },
            {
                value: 1,
                label: <View style={[styles.card]}>
                    <Image source={require('../../../../../../assets/images/master.png')} resizeMode={'contain'} style={[styles.cardImg]} />
                    <Text style={[styles.cardNumber]}>4123 XXXX XXXX 4321</Text>
                </View>
            },
            {
                value: 2,
                label: <View style={[styles.card]}>
                    <Image source={require('../../../../../../assets/images/maestro.png')} resizeMode={'contain'} style={[styles.cardImg]} />
                    <Text style={[styles.cardNumber]}>4123 XXXX XXXX 4321</Text>
                </View>
            }
        ];
        return (
            <View>
                <View style={[styles.imageBox]}>
                    <Image source={require('../../../../../../assets/images/user2.jpg')} style={[styles.image]} />
                </View>
                <Text style={[styles.title]}>Your Saved Cards</Text>
                <View style={[styles.list]}>
                    <List>
                        {data.map(i => (
                            <View key={i.value} >
                                {i.label}
                            </View>
                        ))}
                    </List>
                </View>
                <View>
                    <View style={[styles.choose]}>
                        <Text>Add New Card</Text>
                    </View>
                    <View style={[styles.addNewAction]}>
                        <TouchableOpacity
                            style={[styles.addNewBtn]}
                            onPress={() => {
                                this.props.nav.navigation.navigate('addCard')
                            }}>
                            <Text style={[styles.addNewBtnText]}>+ Use New Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
