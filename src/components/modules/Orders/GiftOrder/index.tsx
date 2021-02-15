import React, { Component } from 'react'
import styles from './styles';
import {View, Text, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {TextareaItem } from '../../../Auth/Accounts/Contact/node_modules/antd-mobile';
export default class GiftOrder extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View >
                        <View>
                            <View style={[styles.gift]}>
                                <Text style={[styles.text]}>Gift Order - If you select you order as gift order we will wrap order in beautiful
                                    gift paper. You can also add personalize message you would like to say to receiver of this
                                    order.</Text>
    
                                <Text style={[styles.cost]}>Additional Rs 50 will be charged.</Text>
                            </View>
                        </View>
                        <View style={[styles.message]}>
                           <Text>Add Message (Optional)</Text>
                           <TextInput style={[styles.textArea]} ></TextInput>
                        </View>
                    </View>
                </ScrollView>
                <View >
                    <TouchableOpacity >
                                <Text >Make it Gift Order</Text>
                            </TouchableOpacity>
                </View>
            </View>
        )
    }
}
