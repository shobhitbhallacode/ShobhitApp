import React, { useContext, useState } from 'react';
import styles from './styles';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import SignInNavigationService from '../../../core/Auth/Services/SignInNavigationService';

import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import { UserContext } from '../UserContext';

function Login() {
    const { loginWithFB, loginWithGoogle , defaultLogin } = useContext(UserContext);
    const [Email, setEmail] = useState<string>('');
    const [Password, setPassword] = useState<string>('');

    return (
        <View style={[styles.container]}>
            <View style={[styles.logoContainer]}>
                <Image
                    source={require('../../../../assets/images/arivaa-ecommerce-logo.png')}
                    resizeMode={'contain'}
                    style={[styles.logo]} />
            </View>

            <View style={[styles.form]} >
                <View style={{ backgroundColor: "#fff" }}>
                    <InputItem
                        defaultValue=""
                        type="text"
                        clear

                        value={Email}
                        placeholder="Enter Email">
                        <Text>
                            <AntDesign name="user" size={24} color="black" />
                        </Text>
                    </InputItem>
                </View>
                <WhiteSpace size="sm" />
                <View style={{ backgroundColor: "#fff" }}>
                    <InputItem
                        type="password"
                        clear
                        placeholder="Enter Password">
                        <Text>
                            <AntDesign name="lock" size={24} color="black" />
                        </Text>
                    </InputItem>
                </View>
                <WhiteSpace size="sm" />
                <Button style={[styles.loginButton]} activeStyle={[styles.loginButton_Active]}
                    onPress={() => { defaultLogin("", "") }} type="primary">
                    <Text > Login</Text>
                </Button>
                <TouchableOpacity onPress={() => { SignInNavigationService.navigate("ForgotPassword", { user: null }) }}>
                    <Text style={[styles.forgotPassword]}> Forgot Password ?</Text>
                </TouchableOpacity>
                <View >
                    <Button style={[styles.CommonButton]} activeStyle={[styles.CommonButton_Active]} onPress={() => { loginWithFB(); }} type="primary">
                        <Text style={{ color: "black" }} > Connect With Facebook
                             <View style={{ paddingLeft: 5 }}>
                                <AntDesign name="facebook-square" size={24} />
                            </View>
                        </Text>
                    </Button>
                </View>
                <WhiteSpace size="sm" />
                <View >
                    <Button style={[styles.CommonButton]} activeStyle={[styles.CommonButton_Active]} onPress={() => { loginWithGoogle();}} type="primary">
                        <Text style={{ color: "black" }}> Connect With Google
                            <View style={{ paddingLeft: 5 }}>
                                <AntDesign name="google" size={24} color="black" />
                            </View>
                        </Text>
                    </Button>
                </View>
            </View>
            <WhiteSpace size="sm" />
            <View style={[styles.option]}>
                <Text style={[styles.optionText]}>New User ? </Text>
                <TouchableOpacity onPress={() => {
                    SignInNavigationService.navigate("Register", { user: null })
                }}>
                    <Text style={[styles.optionText, styles.action]}>Sign Up Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Login;