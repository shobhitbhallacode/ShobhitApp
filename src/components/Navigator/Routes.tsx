
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { AuthParamList, DrawerParamList, HomeParamList } from '../../core/ProductService/types/Routing/Routes';
import DrawerContent from '../Layout/Drawer/DrawerContent';
import { HeaderWithMenuLeft } from '../Layout/Header/HeaderWithMenuLeft';
import ForgotPassword from '../Auth/Accounts/ForgotPassword';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import Home from '../modules/Home';
import SignInNavigationService from '../../core/Auth/Services/SignInNavigationService';
import { View } from '../../../theme/Themed';
import { HomeStack } from './HomeStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserContext } from '../Auth/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';

function Routes() {
    const [loading, setLoading] = useState(true);
    const AuthStack = createStackNavigator<AuthParamList>();
    const DrawerStack = createDrawerNavigator<DrawerParamList>();
    const { User, logout } = useContext(UserContext);
    
    useEffect(() => {
        AsyncStorage.getItem("user")
            .then(userString => {
                if (!userString) {
                    logout();
                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [User]);

    if (loading) {
        return (<ActivityIndicator size="large"></ActivityIndicator>)
    }
    else {
        return (
            <NavigationContainer ref={SignInNavigationService.instance}>
                {User?.AuthToken ? (
                    <DrawerStack.Navigator
                        initialRouteName="Home"
                        drawerContent={() => <DrawerContent />}>
                        <DrawerStack.Screen name="Home" component={HomeStack}></DrawerStack.Screen>
                    </DrawerStack.Navigator>
                ) : (
                        <AuthStack.Navigator screenOptions={{ header: () => null }} initialRouteName="Register">
                            <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
                            <AuthStack.Screen name="Register" component={SignUp}></AuthStack.Screen>
                            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword}></AuthStack.Screen>
                        </AuthStack.Navigator>
                    )}
            </NavigationContainer>
        );
    }
};
export default Routes;
