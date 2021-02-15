import React from 'react';
import styles from './styles';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
export interface AddAddressProps {
    nav: NavigationInjectedProps;
}
export default class AddAddress extends React.Component <AddAddressProps>{
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView>
                    <View style={[styles.content]}>
                        <View style={[styles.form]}>

                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Pincode *</Text>
                                <TextInput
                                    style={styles.input}
                                    value=""
                                />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>City *</Text>
                                <TextInput
                                    style={styles.input}
                                    value=""
                                />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>State *</Text>
                                <TextInput
                                    style={styles.input}
                                    value="" />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Flat/House No./Floor/Building *</Text>
                                <TextInput
                                    style={styles.input}
                                    value="" />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Locality/Colony/Street *</Text>
                                <TextInput
                                    style={styles.input}
                                    value=""
                                />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Landmark *</Text>
                                <TextInput
                                    style={styles.input}
                                    value=""
                                />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Name *</Text>
                                <TextInput
                                    style={styles.input}
                                    value="John Smith"
                                />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Phone No. *</Text>
                                <TextInput
                                    style={styles.input}
                                    value="9876543219"
                                />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Alternate Phone No. (Optional)</Text>
                                <TextInput
                                    style={styles.input}
                                    value=""
                                />
                            </View>
                            <View style={[styles.field]}>
                                <Text style={[styles.fieldLabel]}>Address Type</Text>
                                <View style={[styles.addressTypes]}>
                                    <View style={[styles.type, styles.selected]}>
                                        <Text>Home</Text>
                                    </View>
                                    <View style={[styles.type, styles.margins]}>
                                        <Text>Office</Text>
                                    </View>
                                    <View style={[styles.type]}>
                                        <Text>Others</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
