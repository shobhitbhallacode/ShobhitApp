import React, { Component } from 'react'
import styles from './styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import { NavigationInjectedProps, NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
export interface AddAddressProps {
    nav: NavigationInjectedProps;
}

export default class WishlistGrid extends Component {
    render() {
        return (
            <View style={[styles.gridView]}>
                <View>
                    <View style={[styles.gridBody]}>
                        <View style={[styles.gridContent]}>
                            <Grid>
                                <Row>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../../assets/images/top1.jpg')} resizeMode="cover"
                                                           style={[styles.gridImg]}/>
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                        <TouchableOpacity style={[styles.removeLink]}>
                                                            <Text style={[styles.removeLinkText]}>Remove</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../../assets/images/top1.jpg')} resizeMode="cover" style={[styles.gridImg]}/>
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                        <TouchableOpacity style={[styles.removeLink]}>
                                                            <Text style={[styles.removeLinkText]}>Remove</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </Col>
                                </Row>
                            </Grid>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
