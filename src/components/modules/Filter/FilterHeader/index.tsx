import React, { Component } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps } from 'react-navigation';
export interface FilterHeaderProps {
    nav: NavigationInjectedProps;
}
export default class FilterHeader extends Component<FilterHeaderProps>{
    render() {
        return (
            <View style={[styles.header]}>
                <View style={[styles.headerLeftText]}>
                    <TouchableOpacity>
                        <Icon name="chevron-left" style={[styles.closeIcon]} />
                    </TouchableOpacity>
                    <Text style={[styles.filterText]}>Filter By</Text>
                </View>
                <View style={styles.headerRightText}>
                    <TouchableOpacity>
                        <Text style={[styles.clearText]}>Clear</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={[styles.applybutton]}
                            onPress={() => {
                                this.props.nav.navigation.navigate('products')
                            }}>
                            <Text style={[styles.applybuttonStyle]}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
