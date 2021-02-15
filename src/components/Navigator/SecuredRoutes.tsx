import Notifications from '../Layout/Notifications';
import Profile from '../Auth/Accounts/Profile';
import EditProfile from '../Auth/Accounts/EditProfile';
import Address from '../Auth/Accounts/Profile/Address';
import AddAddress from '../Auth/Accounts/Profile/Address/AddAddress';

import Products from '../modules/Products';
import ProductInfo from '../modules/Products/ProductInfo';
import SubCategories from '../modules/Products/SubCategories';
import Search from '../modules/Search';

import Filters from '../modules/Filter';

//Payment Options
import AddCard from '../modules/Orders/AddCart';
import PaymentOptions from '../modules/Payment/PaymentOptions';
import CardPayment from '../modules/Payment/CardPayment';
import NetBanking from '../modules/Payment/NetBanking';
import CashOnDelivery from '../modules/Payment/CashOnDelivery';
import PayPal from '../modules/Payment/PayPal';

//coupons
import AddCoupon from '../Auth/Accounts/Profile/Coupons/AddCoupon';
import GiftOrder from '../modules/Orders/GiftOrder';

//Shopping cart and orders
import Cart from '../modules/Orders/Cart';
import OrderDetails from '../modules/Orders/OrderDetails';
import OrderHistory from '../modules/Orders/OrderHistory';

import Settings from '../modules/Settings';
import Contact from '../Auth/Accounts/Contact';

import React from 'react';
import { createDrawerNavigator, DrawerView } from '@react-navigation/drawer';
import AppDrawer from '../Layout/Drawer/DrawerContent';
export const INITIAL_ROUTE = 'unsecured';
export const INITIAL_SECURED_ROUTE = 'Home';
export const INITIAL_UNSECURED_ROUTE = 'Splash';

import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Splash from '../Layout/Splash';
import Categories from '../modules/Products/Categories';
import { ProductList } from '../../widgets/ProductList';
import ProductGrid from '../modules/Products/ProductGrid';
import Tags from '../modules/Products/Tags';
import { GridandScroll } from '../../widgets/GridandScroll';
import { ScrollingBanners } from '../../widgets/ScrollingBanners';
import DrawerContent from '../Layout/Drawer/DrawerContent';
import Home from '../modules/Home';

const Drawer = createDrawerNavigator();

export function SecuredRoutes(navigation: any) {
    return (<Drawer.Navigator
        initialRouteName={INITIAL_SECURED_ROUTE}
        drawerContent={props => DrawerContent()}>
        <Drawer.Screen
            name="Home"
            component={Home}
        ></Drawer.Screen>
        <Drawer.Screen
            name="SubCategories"
            component={SubCategories}
        ></Drawer.Screen>
        <Drawer.Screen
            name="Filters"
            component={Filters}
        ></Drawer.Screen>
        {/*<Drawer.Screen
            name="Cart"
            component={Cart}
            ></Drawer.Screen>
        <Drawer.Screen
            name="Address"
            component={Address}
            ></Drawer.Screen>
        <Drawer.Screen
            name="AddAddress"
            component={AddAddress}
           ></Drawer.Screen>
        <Drawer.Screen
            name="PaymentOptions"
            component={PaymentOptions}
            ></Drawer.Screen>
        <Drawer.Screen
            name="Profile"
            component={Profile}
            ></Drawer.Screen>
        <Drawer.Screen
            name="CardPayment"
            component={CardPayment}
           ></Drawer.Screen>
        <Drawer.Screen
            name="NetBanking"
            component={NetBanking}
            ></Drawer.Screen>
        <Drawer.Screen
            name="PayPal"
            component={PayPal}
           ></Drawer.Screen>
        <Drawer.Screen
            name="CashOnDelivery"
            component={CashOnDelivery}
            ></Drawer.Screen>
        <Drawer.Screen
            name="AddCard"
            component={AddCard}
           ></Drawer.Screen>
        <Drawer.Screen
            name="GiftOrder"
            component={GiftOrder}
            ></Drawer.Screen>
        <Drawer.Screen
            name="EditProfile"
            component={EditProfile}
            ></Drawer.Screen>
        <Drawer.Screen
            name="OrderDetails"
            component={OrderDetails}
           ></Drawer.Screen>
        <Drawer.Screen
            name="OrderHistory"
            component={OrderHistory}
            ></Drawer.Screen>
        <Drawer.Screen
            name="AddCoupon"
            component={AddCoupon}
            ></Drawer.Screen>
        <Drawer.Screen
            name="Settings"
            component={Settings}
           ></Drawer.Screen>
        <Drawer.Screen
            name="Notifications"
            component={Notifications}
           ></Drawer.Screen>
        <Drawer.Screen
            name="Contact"
            component={Contact}
            ></Drawer.Screen>
        <Drawer.Screen
            name="Search"
            component={Search}
            ></Drawer.Screen> */}
    </Drawer.Navigator>
    )
}
