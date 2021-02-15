import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

class SignInNavigationService {
    instance = React.createRef<NavigationContainerRef>();
    dispatch(action: any) {
        this.instance.current?.dispatch(action)
    }
    getInstance() {
        return this.instance?.current
    }
    canGoBack() {
        return this.getInstance()?.canGoBack()
    }
    navigate(routeName: string, params: any) {
        return this.getInstance()?.navigate(routeName, params)
    }
}

export default new SignInNavigationService()