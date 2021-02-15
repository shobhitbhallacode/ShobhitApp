import React from 'react';
import styles from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps, NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
export interface GeneralProps {
    nav: NavigationInjectedProps;
}

export default class General extends React.Component<GeneralProps> {
    render() {
        return (
            <View style={[styles.content]}>
                <View>
                    <View style={[styles.editAction]}>
                        <TouchableOpacity style={[styles.editBtn]} onPress={() => {
                            this.props.nav.navigation.navigate('editProfile')
                        }}>
                            <Icon name='md-create' />
                            <Text style={[styles.editText]}>Edit</Text>
                        </TouchableOpacity> text={ }
                    </View>
                    <View style={[styles.imageBox]}>
                        <Image source={require('../../../../../../assets/images/user2.jpg')} style={[styles.image]} />
                    </View>
                    <View style={[styles.userInformation]}>
                        <View style={[styles.info]}>
                            <Text style={[styles.label]}>Name</Text>
                            <Text style={[styles.separator]}>:</Text>
                            <Text style={[styles.value]}>Victoria</Text>
                        </View>
                        <View style={[styles.info]}>
                            <Text style={[styles.label]}>Email</Text>
                            <Text style={[styles.separator]}>:</Text>
                            <Text style={[styles.value]}>abc@xyz.com</Text>
                        </View>
                        <View style={[styles.info]}>
                            <Text style={[styles.label]}>Phone No.</Text>
                            <Text style={[styles.separator]}>:</Text>
                            <Text style={[styles.value]}>9876543210</Text>
                        </View>
                        <View style={[styles.info]}>
                            <Text style={[styles.label]}>Joined On</Text>
                            <Text style={[styles.separator]}>:</Text>
                            <Text style={[styles.value]}>2-Nov-2017</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
