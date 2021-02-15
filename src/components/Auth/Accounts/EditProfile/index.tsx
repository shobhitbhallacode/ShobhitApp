import React, { Component } from 'react'
import styles from './styles';
import {View, Text, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps } from "react-navigation";
export interface EditProfileProps {
    nav: NavigationInjectedProps;
}
export default class EditProfile extends Component <EditProfileProps>{
    render() {
        return (
            <View style={[styles.container]}>
                    <ScrollView>
                        <View style={[styles.content]}>
                            <View style={[styles.form]}>
                                <View style={[styles.imageBox]}>
                                    <Image source={require('../../../../../assets/images/user2.jpg')} style={[styles.image]}/>
                                    <TouchableOpacity style={[styles.changeImageLink]}>
                                    <Icon name='md-create'/>
                                    <Text style={[styles.text]}> Change Image</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.field]}>
                                    <Text style={[styles.fieldLabel]}>Name *</Text>
                                    <TextInput
                                        style={styles.input}
                                        value="John Smith"
                                    />
                                </View>
                                <View style={[styles.field]}>
                                    <Text style={[styles.fieldLabel]}>Email *</Text>
                                    <TextInput
                                        style={styles.input}
                                        value="abc@xyz.com"
                                    />
                                </View>
                                <View style={[styles.field]}>
                                    <Text style={[styles.fieldLabel]}>Phone No. *</Text>
                                    <TextInput
                                        style={styles.input}
                                        value="9876543219"
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
            </View>
        )
    }
}
