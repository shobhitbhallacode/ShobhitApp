import React from 'react';
import styles from './styles';
import { View, Text, Image, Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Link } from '@react-navigation/native';
import { NavigationInjectedProps } from 'react-navigation';

export interface GridofFiveProps{
    nav: any;
}
export class GridofFive extends React.Component<GridofFiveProps> {
    render() {
        return (
            <View style={[styles.gridofSix]}>
                <View>
                    <View style={[styles.gridHeader]}>
                        <Text style={[styles.gridTitle]}>Featured in Shoes</Text>
                        <Button title="View All"
                            //style={[styles.gridbutton]} 
                            //textStyle={[styles.gridbuttonStyle]}
                            onPress={() => {
                               this.props.nav.navigation.navigate('products')
                            }} />
                    </View>
                    <View style={[styles.gridBody]}>
                        <View style={[styles.gridContent]}>
                            <Grid>
                                <Row>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/shoe1.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Black Shoes</Text>
                                                        <Text style={[styles.productText]}>$159</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/shoe2.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Loopers</Text>
                                                        <Text style={[styles.productText]}>$120</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/shoe3.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Formals Shoes</Text>
                                                        <Text style={[styles.productText]}>$230</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/shoe4.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Velvet Shoes</Text>
                                                        <Text style={[styles.productText]}>$230</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/shoe5.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Classic White</Text>
                                                        <Text style={[styles.productText]}>$330</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/shoe6.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>High Red Heels</Text>
                                                        <Text style={[styles.productText]}>$180</Text>
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