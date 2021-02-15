import React, { Component } from 'react';
import { FlatList, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Address from './Address';
import Cards from './Cards';
import Coupons from './Coupons';
import General from './General';
import Wishlist from './Wishlist';
import { NavigationInjectedProps } from 'react-navigation';
export interface ProfileProps{
    nav: NavigationInjectedProps;
}
export default class Profile extends Component<ProfileProps> {
  state={
    dataSource: this.getNavigation(),
    activeCategory : 'GENERAL'
  }
    getNavigation(){
        return [
            {
                icon : 'user',
                name : 'GENERAL',
                link : ''
            },
            {
                icon : 'heart',
                name : 'WISHLIST',
                link : ''
            },{
                icon : 'map',
                name : 'ADDRESS',
                link : ''
            },
            {
                icon : 'credit-card',
                name : 'CARDS',
                link : ''
            },
            {
                icon : 'tag',
                name : 'COUPONS',
                link : ''
            }
        ]
    }
    render() {
        let activeView = null
        switch (this.state.activeCategory) {
            case 'GENERAL':
                activeView = <General nav={this.props.nav}/>
                break
            case 'ADDRESS':
                activeView = <Address nav={this.props.nav}/>
                break
            case 'WISHLIST':
                activeView = <Wishlist nav={this.props.nav}/>
                break
            case 'CARDS':
                activeView = <Cards nav={this.props.nav}/>
                break
            case 'COUPONS':
                activeView = <Coupons nav={this.props.nav}/>
                break
        }
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    {activeView}
                </ScrollView>
                <View style={[styles.footer]}>
                    <View style={[styles.navigation]}>
                        <FlatList
                            data={this.state.dataSource}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                            renderItem={({item}) =>
                                <TouchableOpacity key={item.name} style={[styles.navigationItem]}>
                                        <Icon name={item.icon} style={[styles.itemIcon]}/>
                                        <Text style={[styles.itemName]}>{item.name}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                </View>
            </View>
        )
    }
}
