import React, { Component } from 'react'
import styles from './styles';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { InputItem } from '../../Auth/Accounts/Contact/node_modules/antd-mobile';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Search extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View style={[styles.search]}>
                        <View style={[styles.form]}>
                            <View style={[styles.formItem]}>
                                <TextInput
                                    style={[styles.input]}
                                />
                                <View style={[styles.searchIconBox]}>
                                    <Icon name="ios-search"
                                        style={[styles.searchIcon]} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.trending]}>
                        <Text>Trending Searches</Text>
                        <View style={[styles.list]}>
                            <Text style={[styles.searchItem]}>Nike Shoes</Text>
                            <Text style={[styles.searchItem]}>Wedding Dress</Text>
                            <Text style={[styles.searchItem]}>Women Tops</Text>
                            <Text style={[styles.searchItem]}>Men Watches</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.actions]}>
                    <TouchableOpacity style={[styles.button]}>
                        <Text style={[styles.buttonText]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
