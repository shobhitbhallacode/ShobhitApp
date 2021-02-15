import React from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { drawerData } from './DrawerConfig';
import { Text } from '../../../../theme/Themed';
import DrawerItem from './DrawerItem';
import { NavigationInjectedProps } from 'react-navigation';
import { DrawerNavProps } from '../../../core/ProductService/types/Routing/Routes';
import DrawerPanel from './DrawerPanel';
interface DrawerProps {
    nav: NavigationInjectedProps;
}
function DrawerContent(){
    return (
        <ScrollView>
            <View style={[styles.drawerHeader]}>
                <Image
                    source={require('../../../../assets/images/arivaa-pink-ecom.png')}
                    resizeMode={'contain'}
                    style={[styles.logo]} />
                <Image
                    resizeMode="cover"
                    source={require('../../../../assets/images/user2.jpg')}
                    style={[styles.drawerProfileImg]}></Image>
            </View>
            <View style={[styles.login]}>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => {
                    }}>
                    <Text style={[styles.buttonText]}>Logout</Text>
                </TouchableOpacity>
                <DrawerPanel></DrawerPanel>
            </View>
        </ScrollView>
    )
}
export default DrawerContent;