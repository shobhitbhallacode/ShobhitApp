import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Notifications extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View>
                        <View style={[styles.notifications]}>
                            <View style={[styles.notification]}>
                                <Image source={require('../../../../assets/images/blazers.jpg')} resizeMode="cover" style={[styles.notificationImg]} />
                                <TouchableOpacity style={[styles.close]}>
                                    <Icon name={'md-close'} size={20} color="#555" />
                                </TouchableOpacity>
                                <View style={[styles.text]}>
                                    <Text style={[styles.title]}>New Arrivals!!</Text>
                                    <Text style={[styles.note]}>New men blazers just arrived. Get 25% off on the purchase two blazers.</Text>
                                </View>
                            </View>
                            <View style={[styles.notification]}>
                                <Image source={require('../../../../assets/images/couple.jpg')} resizeMode="cover" style={[styles.notificationImg]} />
                                <TouchableOpacity style={[styles.close]}>
                                    <Icon name={'md-close'} size={20} color="#555" />
                                </TouchableOpacity>
                                <View style={[styles.text]}>
                                    <Text style={[styles.title]}>Couple Special!!</Text>
                                    <Text style={[styles.note]}>New Couple Sets. Get 25% off on the purchase of first order.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
