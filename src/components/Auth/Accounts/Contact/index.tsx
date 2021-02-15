import React, { Component } from 'react'
import styles from './styles';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
export interface ContactProps {
    nav: NavigationInjectedProps;
}
export default class Contact extends Component<ContactProps> {
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View>
                        <View style={[styles.contact]}>
                            <Text style={[styles.title]}>Contact Us</Text>
                            <Text style={[styles.text]}>We Get Back to You Shortly</Text>
                        </View>
                        <View style={[styles.form]}>
                            <View style={[styles.formItem]}>
                                <Text style={[styles.label]}>Subject</Text>
                            </View>
                            <View style={[styles.formItem]}>
                                <Text style={[styles.label]}>Your Name</Text>
                            </View>
                            <View style={[styles.formItem]}>
                                <Text style={[styles.label]}>Your Phone</Text>
                            </View>
                            <View style={[styles.formItem]}>
                                <Text style={[styles.label]}>Your Message</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View >
                    <TouchableOpacity >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
