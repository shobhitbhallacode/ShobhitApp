import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Grid, Row } from 'react-native-easy-grid';
export default class GridofSix extends React.Component {
    render() {
        return (
            <View style={[styles.gridofSix]}>
                <View>
                    <View style={[styles.gridHeader]}>
                        <Text style={[styles.gridTitle]}>Shop by Brands</Text>
                    </View>
                    <View style={[styles.gridBody]}>
                        <View style={[styles.gridContent]}>
                            <Grid>
                                <Row>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../assets/images/adidas.png')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Adidas</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../assets/images/armani.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Armani</Text>
                                                    </View>
                                                </View> 
                                            </TouchableOpacity>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../assets/images/ck.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Calvin Klein</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../assets/images/men.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Circle C</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../assets/images/reebok.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Reebok</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <TouchableOpacity >
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../../assets/images/nike.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Nike</Text>
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