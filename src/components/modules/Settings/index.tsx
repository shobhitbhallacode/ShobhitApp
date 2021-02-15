import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Switch } from '../../Auth/Accounts/Contact/node_modules/antd-mobile';
import Icon from 'react-native-vector-icons/FontAwesome';
export interface SettingsProps {

}
export default class Settings extends Component<SettingsProps> {
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View >
                        <View>
                            <View style={[styles.item]}>
                                <Text style={[styles.text]}>App Notifications</Text>
                                <Switch onClick={(checked) => {
                                    console.log(checked);
                                }}
                                />
                            </View>
                            <View style={[styles.item]}>
                                <Text style={[styles.text]}>Email Notifications</Text>
                                <Switch
                                    onClick={(checked) => {
                                        console.log(checked);
                                    }}
                                />
                            </View>
                            <TouchableOpacity style={[styles.link]}>
                                <Text style={[styles.text]}>Change Password</Text>
                                <Icon name="chevron-right" style={[styles.arrowIcon]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View >
                    <TouchableOpacity>
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
