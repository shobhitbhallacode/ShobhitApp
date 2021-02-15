import React from 'react';
import styles from './styles';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps } from 'react-navigation';
interface DrawerItemProps {
    icon: string;
    itemText: string;
    routeName: string;
}

export default class DrawerItem extends React.Component<DrawerItemProps>{
    constructor(props: any) {
        super(props);
        this.ItemClick = this.ItemClick.bind(this);
    }
    ItemClick = (routeName: string) => {
    }
    render() {
        return (
            <TouchableHighlight underlayColor="transparent" onPress={() => {
                this.ItemClick(this.props.routeName)
            }}>
                <View style={[styles.drawerNavItem]}>
                    {this.props.icon ? (<Icon name={this.props.icon} size={25} color="#fff" style={[styles.drawerNavItemIcon]} />) : null}
                    <Text style={styles.drawerItemText}>{this.props.itemText}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}