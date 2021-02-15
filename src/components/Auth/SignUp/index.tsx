import React, { useContext, useState } from 'react';
import styles from './styles';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthNavProps } from '../../../core/ProductService/types/Routing/Routes';
//import { AuthContext } from '../../../core/services/UserService';
import { RectButton } from 'react-native-gesture-handler';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button, Icon, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SignInNavigationService from '../../../core/Auth/Services/SignInNavigationService';

function Login() {
    const [otp, setOtp] = useState<boolean>(false);
    return (
        <View style={[styles.container]}>
            <View style={[styles.logoContainer]}>
                <Image
                    source={require('../../../../assets/images/arivaa-ecommerce-logo.png')}
                    resizeMode={'contain'}
                    style={[styles.logo]} />
            </View>
            <WhiteSpace size="lg" />
            {
                !otp ? (
                    <View style={[styles.form]} >
                        <View style={{ backgroundColor: "#fff" }}>
                            <InputItem
                                defaultValue=""
                                type="text"
                                clear
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
                        <View style={{ backgroundColor: "#fff" }}>
                            <InputItem
                                type="text"
                                clear
                                placeholder="Enter Mobile No">
                                <Text>
                                    <AntDesign name="mobile1" size={24} color="black" />
                                </Text>
                            </InputItem>
                        </View>
                        <WhiteSpace size="sm" />
                        <View>
                            <Button style={[styles.loginButton]} activeStyle={[styles.loginButton_Active]} onPress={() => {
                                setOtp(true);
                            }
                            } type="primary">
                                <Text> Register</Text>
                            </Button>
                        </View>
                    </View>
                ) : (
                        <View style={[styles.form]}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>Please enter the four digit OTP received in Mobile / Email</Text>
                            <WhiteSpace size="sm" />
                            <View style={{ backgroundColor: "#fff" }}>
                                <InputItem
                                    type="text"
                                    clear
                                    placeholder="Enter OTP">
                                    <Text>
                                        <AntDesign name="message1" size={24} color="black" />
                                    </Text>
                                </InputItem>
                            </View>
                            <WhiteSpace size="lg" />
                            <Button style={[styles.loginButton]} activeStyle={[styles.loginButton_Active]}
                                onPress={() => {
                                    setOtp(false);
                                    SignInNavigationService.navigate('Login', { user: null });
                                }} type="primary">
                                <Text> Verify</Text>
                            </Button>
                        </View>
                    )
            }
            <WhiteSpace size="lg" />
            <View style={[styles.form]} >
                <View >
                    <Button style={[styles.CommonButton]} activeStyle={[styles.CommonButton_Active]} onPress={() => { }} type="primary">
                        <Text style={{ color: "black" }} > Connect With Facebook
                             <View style={{ paddingLeft: 5 }}>
                                <AntDesign name="facebook-square" size={24} />
                            </View>
                        </Text>
                    </Button>
                </View>
                <WhiteSpace size="sm" />
                <View >
                    <Button style={[styles.CommonButton]} activeStyle={[styles.CommonButton_Active]} onPress={() => { }} type="primary">
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
                <Text style={[styles.optionText]}>Have Account ? </Text>
                <TouchableOpacity onPress={() => {
                    SignInNavigationService.navigate('Login', { user: null })
                }}>
                    <Text style={[styles.optionText, styles.action]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Login;