import React from 'react';
import styles from './styles';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps } from "react-navigation";
interface HeaderWithBackLeftProps {
    nav: NavigationInjectedProps;
}
export class HeaderWithBack extends React.Component<HeaderWithBackLeftProps>{
    constructor(props: any) {
        super(props);
        this.goback = this.goback.bind(this);
    }
    goback(){
        this.props.nav.navigation.goBack()
    }
    render() {
        const translationSearch = "search";
        return (
            <View style={[styles.header]}>
                <View style={[styles.headerLeftText, styles.headerLeftIcon]}>
                    <TouchableHighlight onPress={() => { this.goback(); }}>
                        <Icon name="chevron-left" style={[styles.closeIcon]} />
                        <Text style={[styles.filterText]}>{translationSearch}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.headerRightText}>
                    <TouchableHighlight onPress={() => { this.goback(); }}>
                        <Icon name="home" style={[styles.homeIcon]} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}