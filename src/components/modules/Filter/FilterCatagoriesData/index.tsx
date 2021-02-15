import React, { Component } from 'react'
import styles from './styles';
import {View, Text, ScrollView} from 'react-native';
import {Checkbox} from '../../../Auth/Accounts/Contact/node_modules/antd-mobile';
import { NavigationInjectedProps } from 'react-navigation';
export interface FilterCategoriesProps {
    nav: NavigationInjectedProps;
}
export default class FilterCategoriesData extends Component {
    render() {
        const CheckboxItem = Checkbox.CheckboxItem;
        const data = [
            {value: 0, label: 'Nike'},
            {value: 1, label: 'Addidas'},
            {value: 2, label: 'Puma'},
        ];
        return (
            <ScrollView>
                <Text style={[styles.filterTitle]}>Select Brand</Text>
                {data.map(i => (
                    <CheckboxItem key={i.value}>
                        <Text>{i.label}</Text>
                    </CheckboxItem>
                ))}
            </ScrollView>
        )
    }
}
