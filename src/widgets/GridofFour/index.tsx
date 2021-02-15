import React from 'react';
import styles from './styles';
import { View, Text, Image, Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Link } from '@react-navigation/native';
import { NavigationInjectedProps } from 'react-navigation';

export interface GridofFourProps{
    nav: any
}
export class GridofFour extends React.Component <GridofFourProps>{
    render() {
        return (
            <View style={[styles.gridOfFour]}>
                <View>
                    <View style={[styles.gridHeader]}>
                        <Text style={[styles.gridTitle]}>Deals of the Day</Text>
                        <Button title="View All"
                            // style={[styles.gridbutton]} 
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
                                                    <Image source={require('../../../assets/images/western.jpg' )} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Western Wear</Text>
                                                        <Text style={[styles.productText]}>Min. 45% off</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/glasses.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Sun Glasses</Text>
                                                        <Text style={[styles.productText]}>Min. 20% - 30% off</Text>
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
                                                    <Image source={require('../../../assets/images/jeans.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Jeans</Text>
                                                        <Text style={[styles.productText]}>Min. 70% off</Text>
                                                    </View>
                                                </View>
                                            </Link>
                                        </View>
                                    </Col>
                                    <Col style={[styles.gridCol]}>
                                        <View>
                                            <Link to="products">
                                                <View style={[styles.gridItem]}>
                                                    <Image source={require('../../../assets/images/bags.jpg')} resizeMode="cover" style={[styles.gridImg]} />
                                                    <View style={[styles.productBox]}>
                                                        <Text style={[styles.productName]}>Bags</Text>
                                                        <Text style={[styles.productText]}>Min. 25% off</Text>
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
