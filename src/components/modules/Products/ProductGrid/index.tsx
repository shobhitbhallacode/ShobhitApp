import React from 'react';
import styles from './styles';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Link } from '@react-navigation/native';

export default class ProductGrid extends React.Component {
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
                                            <Link to="productInfo">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../assets/images/top1.jpg')} resizeMode="cover"
                                                        style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="productInfo">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../assets/images/top2.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="productInfo">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../assets/images/top3.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="productInfo">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../assets/images/top4.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="productInfo">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../assets/images/top1.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="productInfo">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../../../assets/images/top4.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Brown Top</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                    </View>
                                                </View>
                                            </Link>
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