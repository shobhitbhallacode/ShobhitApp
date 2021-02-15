import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

export type AuthParamList = {
    Login:undefined;
    Register:undefined;
    ForgotPassword:undefined;
    ResetPassword:undefined;
    Introduction:undefined;
}
export type DrawerParamList = {
    Home:undefined;
    Profile:undefined;
    Address:undefined;
    AddAddress:undefined;
    Cards:undefined;
    Coupons:undefined;
    Wishlist:undefined;
    Settings:undefined;
}
export type HeaderParamList = {
    HeaderWithMenu:undefined;
    HeaderWithBack:undefined;
}
export type BottomTabParamList = {    
}
export type HomeParamList = {
    Home:{
        name:string;
        submit?: React.MutableRefObject<() => void>;
    },  
    Categories:{
        name:string;
    }
    DrawerContent:{
        name:string;
        submit?: React.MutableRefObject<() => void>;
    }, 
    Products:{
        name:string;
    }
    ProductDetails:{
        name:string;
    }
    EditProduct:{
        name:string;
        submit?: React.MutableRefObject<() => void>;
    }
};

export type ProductParamList = {
    
}
export type AuthNavProps<T extends keyof AuthParamList>={
    navigation: StackNavigationProp<AuthParamList, T>;
    route: RouteProp<AuthParamList, T>;
}
export type DrawerNavProps<T extends keyof DrawerParamList>={
    navigation: StackNavigationProp<DrawerParamList, T>;
    route: RouteProp<DrawerParamList, T>;
}
export type HeaderStackNavProps<T extends keyof HeaderParamList>={
    navigation: StackNavigationProp<HeaderParamList, T>;
    route: RouteProp<HeaderParamList, T>;
}
export type  HomeStackNavProps<T extends keyof HomeParamList>={
    navigation: StackNavigationProp<HomeParamList, T>;
    route: RouteProp<HomeParamList, T>;
}
