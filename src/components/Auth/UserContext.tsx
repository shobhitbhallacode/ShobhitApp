import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';
import { authorize, refresh } from 'react-native-app-auth';

import moment from 'moment';
import { useContext } from 'react';
import { stringify } from 'uuid';

import { AZURE_CONFIG, FACEBOOK_APP_ID, FIREBASE_CONFIG } from './Credentials';

export interface authObject {
  appId: string;
  dataAccessExpirationDate: Date;
  expirationDate: Date;
  permissions?: string[];
  refreshDate?: Date;
  token: string;
  tokenSource?: string;
  userId: string;
  userImages: string;
}
export interface UserProfile {
  AuthToken?: authObject;
  UserName: string;
  Email: string;
  Provider: string;
}
export const initUserProfile: UserProfile = {
  AuthToken: undefined,
  UserName: '',
  Email: '',
  Provider: "default"
}
export interface FBUserData {
  id: number;
  name: string;
  picture: {
    data: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number
    }
  }
}
export const UserContext = createContext<{
  User: UserProfile | undefined,
  defaultLogin: (Email: string, Password: string) => void,
  logout: () => void,
  register: (Email: string, Password: string, ConfirmPassword: string, MobileNo: number) => void,
  loginWithFB: () => void,
  loginWithGoogle: () => void,
  loginWithFireStore: (Email: string, Password: string) => void,
  loginWithAzureAD: () => void
}>({
  User: initUserProfile,
  defaultLogin: (Email: string, Password: string) => { },
  logout: () => { },
  register: (Email: string, Password: string, ConfirmPassword: string, MobileNo: number) => { },
  loginWithFB: () => { },
  loginWithGoogle: () => { },
  loginWithFireStore: (Email: string, Password: string) => { },
  loginWithAzureAD: () => { }
});
const AuthProvider: React.FC = ({ children }) => {
  const [User, setUser] = useState<UserProfile | undefined>();
  return (<UserContext.Provider value={{
    User,
    defaultLogin: (Email: string, Password: string) => {
      const authToken = { AuthToken: "saas", UserName: "bob", Email: "wer" };
      AsyncStorage.setItem("user", JSON.stringify(authToken));
      //  setUser(authToken)
    },
    logout: async () => {
      setUser(undefined);

      AsyncStorage.removeItem("user");

      await Facebook.logOutAsync();

      await GoogleSignIn.signOutAsync();
      await GoogleSignIn.disconnectAsync();

      await firebase.auth().signOut();

      //CLEAN AZURE AUTH
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('refreshToken');
      await AsyncStorage.removeItem('expireTime');
    },
    register: (Email: string, Password: string, ConfirmPassword: string, MobileNo: number) => {
    },
    loginWithFB: async () => {
      try {
        await Facebook.initializeAsync({
          appId: FACEBOOK_APP_ID,
        });
        const type = await (await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile'], })).type;
        if (type === 'success') {
          const ro = await Facebook.getAuthenticationCredentialAsync();
          if (ro != null) {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${ro.token}&fields=id,name,picture.type(large)`)
              .then(response => response.json())
              .then(data => {
            
                const userData: FBUserData = data;
                const appid = ro?.appId;
                const userid = ro?.userId;
                const token = ro?.token;
                const refreshDate = ro?.refreshDate;
            
                const userid2 = userData.id;
                const name2 = userData.name;
                const pictureurl = userData.picture.data.url;
                const pictureheight = userData.picture.data.height;
                const picturewidth = userData.picture.data.width;
                debugger;
                alert('Logged in!' + `Hi ${userData.name}!`);
              })
          }
        } else {
          // type === 'cancel' 
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    },
    loginWithGoogle: async () => {
      await GoogleSignIn.initAsync({
        // You may ommit the clientId when the firebase `googleServicesFile` is configured
        clientId: '1087250623019-p189iqvonvnhkp9ta19tm3q1bbjdihaq.apps.googleusercontent.com',
      });
      const user = await GoogleSignIn.signInSilentlyAsync();
    },
    loginWithFireStore: (Email: string, Password: string) => {
      firebase.initializeApp(FIREBASE_CONFIG);
      firebase.auth().createUserWithEmailAndPassword(Email, Password).then((res) => {
        let username = res.user?.displayName
      })
    },
    loginWithAzureAD: async () => {
      if (getAccessTokenAsync() != null) {
        const result = await authorize(AZURE_CONFIG);
        console.log(result.accessToken);
        // Store the access token, refresh token, and expiration time in storage
        await AsyncStorage.setItem('userToken', result.accessToken);
        await AsyncStorage.setItem('refreshToken', result.refreshToken);
        await AsyncStorage.setItem('expireTime', result.accessTokenExpirationDate);
      }
    }
  }}>
    {children}
  </UserContext.Provider>)
}
const getAccessTokenAsync = async () => {
  const expireTime = await AsyncStorage.getItem('expireTime');

  if (expireTime !== null) {
    // Get expiration time - 5 minutes // If it's <= 5 minutes before expiration, then refresh
    const expire = moment(expireTime).subtract(5, 'minutes');
    const now = moment();
    if (now.isSameOrAfter(expire)) {
      // Expired, refresh
      console.log('Refreshing token');
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      console.log(`Refresh token: ${refreshToken}`);
      const result = await refresh(AZURE_CONFIG, { refreshToken: refreshToken || '' });

      // Store the new access token, refresh token, and expiration time in storage
      await AsyncStorage.setItem('userToken', result.accessToken);
      await AsyncStorage.setItem('refreshToken', result.refreshToken || '');
      await AsyncStorage.setItem('expireTime', result.accessTokenExpirationDate);
      return result.accessToken;
    }
    // Not expired, just return saved access token
    const accessToken = await AsyncStorage.getItem('userToken');
    return accessToken;
  }
  return null;
}
export default AuthProvider;