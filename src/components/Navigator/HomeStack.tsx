import React, { useContext, useEffect, useRef, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, Button, View, Image, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import faker from 'faker';
import { HomeParamList, HomeStackNavProps } from "../../core/ProductService/types/Routing/Routes";
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderWithMenuLeft } from "../Layout/Header/HeaderWithMenuLeft";
import { HeaderWithMenuRight } from "../Layout/Header/HeaderWithMenuRight";
import Home from "../modules/Home";
import Products from "../modules/Products";

interface HomeStackProps {   
}
const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home} 
                options={({ route, navigation }) => ({
                    headerLeft: () => (HeaderWithMenuLeft(navigation, route)),
            //        headerRight: () => (HeaderWithMenuRight(navigation, route))
                })}
            ></Stack.Screen>
             <Stack.Screen
                name="Products"
                component={Products} 
                options={({ route, navigation }) => ({
                 //   headerLeft: () => (HeaderWithMenuLeft(navigation, route)),
            //        headerRight: () => (HeaderWithMenuRight(navigation, route))
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}