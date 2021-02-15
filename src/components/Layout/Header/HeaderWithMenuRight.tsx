import React from 'react';
import styles from './styles';
import { View, Text, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationInjectedProps } from "react-navigation";
import { Col, Row } from 'react-native-easy-grid';

export function HeaderWithMenuRight(navigation: any, route: any) {
    return (
        <Row>
            <Col>
                <TouchableOpacity
                    onPress={() => {
                        //submit the form
                        // if (route.params.submit) {
                        //     route.params.submit.current()
                        // }
                    }}>
                    <Icon name="search"
                        style={[styles.menuIcon, styles.menuIconSearch]} />
                </TouchableOpacity>
            </Col>
            <Col>
                <TouchableOpacity
                    onPress={() => {
                        //submit the form
                        if (route.params.submit) {
                            route.params.submit.current();
                        }
                    }}
                    style={{ paddingRight: 8 }}>
                    <Icon name="shopping-cart" style={[styles.menuIcon, styles.menuIconCart]} />
                    <View style={[styles.count]}>
                        <Text style={[styles.value]}>1</Text>
                    </View>
                </TouchableOpacity>
            </Col>
            <Col>
                <TouchableOpacity
                    onPress={() => {
                        //submit the form
                        if (route.params.submit) {
                            route.params.submit.current();
                        }
                    }}
                    style={{ paddingRight: 8 }}>
                    <Icon name="bell-o" style={[styles.menuIcon]} />
                </TouchableOpacity>
            </Col>
        </Row>
    )
}