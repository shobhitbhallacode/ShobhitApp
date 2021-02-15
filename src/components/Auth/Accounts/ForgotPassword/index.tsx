import React, { useContext } from 'react';
import styles from './styles';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthNavProps } from '../../../../core/ProductService/types/Routing/Routes';
import { AuthContext } from '../../../../core/ProductService/services/UserService';
import { RectButton } from 'react-native-gesture-handler';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button, Icon, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import NavigationService from '../../../../core/Auth/Services/SignInNavigationService';

export interface ForgetPasswordProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

function ForgetPassword({ navigation }: ForgetPasswordProps) {
    return (
        <View style={[styles.container]}>
            <View style={[styles.logoContainer]}>
                <Image
                    source={require('../../../../../assets/images/arivaa-ecommerce-logo.png')}
                    resizeMode={'contain'}
                    style={[styles.logo]} />
            </View>
            <View style={[styles.form]} >
                <Text style={{ color: "#fff", fontSize: 20 }}>Forgot Password ?</Text>
                <WhiteSpace size="sm" />
                <View style={{ backgroundColor: "#fff" }}>
                    <InputItem
                        defaultValue=""
                        type="text"
                        clear
                        placeholder="Old password">
                        <Text>
                            <AntDesign name="lock" size={24} color="black" />
                        </Text>
                    </InputItem>
                </View>
                <WhiteSpace size="sm" />
                <View style={{ backgroundColor: "#fff" }}>
                    <InputItem
                        defaultValue=""
                        type="text"
                        clear
                        placeholder="New password">
                        <Text>
                            <AntDesign name="lock" size={24} color="black" />
                        </Text>
                    </InputItem>
                </View>

                <WhiteSpace size="sm" />
                <View style={{ backgroundColor: "#fff" }}>
                    <InputItem
                        type="password"
                        clear
                        placeholder="Re-enter Password">
                        <Text>
                            <AntDesign name="lock" size={24} color="black" />
                        </Text>
                    </InputItem>
                </View>
                <WhiteSpace size="sm" />
                <WhiteSpace size="sm" />
                <WhiteSpace size="sm" />
                <Button style={[styles.loginButton]} activeStyle={[styles.loginButton_Active]} onPress={() => { NavigationService.navigate('Login', { user: null }) }} type="primary">
                    <Text > Reset</Text>
                </Button>
                <WhiteSpace size="sm" />
            </View>
            <WhiteSpace size="sm" />
            <View style={[styles.option]}>
                <Text style={[styles.optionText]}>Existing User ? </Text>
                <TouchableOpacity onPress={() => {
                    NavigationService.navigate('Register', { user: null })
                }}>
                    <Text style={[styles.optionText, styles.action]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ForgetPassword; 