import { AuthConfiguration } from 'react-native-app-auth';

export const FACEBOOK_APP_ID = '879576836140362';

export const FIREBASE_CONFIG = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "reactnativefirebase-00000.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
    projectId: "reactnativefirebase-00000",
    storageBucket: "reactnativefirebase-00000.appspot.com",
    messagingSenderId: "000000000000000",
    appId: "1:000000000000000:web:000000000000000"
};

export const GOOGLE_CLIENT_ID=""

export const AZURE_AUTH_CONFIG = {
    appId: 'YOUR_APP_ID_HERE',
    appScopes: [
        'openid',
        'offline_access',
        'profile',
        'User.Read',
        'MailboxSettings.Read',
        'Calendars.ReadWrite'
    ]
};
export const AZURE_CONFIG: AuthConfiguration = {
    clientId: AZURE_AUTH_CONFIG.appId,
    redirectUrl: 'graph-tutorial://react-native-auth/',
    scopes: AZURE_AUTH_CONFIG.appScopes,
    additionalParameters: { prompt: 'select_account' },
    serviceConfiguration: {
        authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
        tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    }
};