import React from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { drawerData } from '../DrawerConfig';
import DrawerItem from '../DrawerItem';
import { NavigationInjectedProps } from 'react-navigation';
interface DrawerPanelProps {

}
export default class DrawerPanel extends React.Component<DrawerPanelProps>{
    render() {
        return (
            <ScrollView>
                <View style={[styles.drawerHeader]}>
                    <Icon name="shopping-bag" style={[styles.drawerLogo]} />
                    <Image resizeMode="cover" source={require('../../../../../assets/images/user2.jpg')} style={[styles.drawerProfileImg]}></Image>
                </View>
                <View>
                    {
                        drawerData.map((item, index) => {
                            return (
                                <DrawerItem
                                    key={index}
                                    icon={item.icon}
                                    itemText={item.title}
                                    routeName={item.route}></DrawerItem>)
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}