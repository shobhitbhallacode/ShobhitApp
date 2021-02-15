import React, { Component } from 'react'
import styles from './styles';
import {View,Text} from 'react-native';
import {Col,Row,Grid } from "react-native-easy-grid";
import FilterHeader from './FilterHeader';
import FilterCategories from './FilterCatagories';
import FilterCategoriesData from './FilterCatagoriesData';
import { NavigationInjectedProps } from 'react-navigation';
export interface FilterProps{
    nav: NavigationInjectedProps;
}
export default class Filter extends Component<FilterProps> {
    render() {
        return (
            <View>
                <FilterHeader nav={this.props.nav}/>
                <View style={[styles.filters]}>
                    <Grid>
                        <Row>
                            <Col style={{width:120}}>
                                <View style={[styles.filterCategories]}>
                                    <FilterCategories/>
                                </View>
                            </Col>
                            <Col>
                                <View style={[styles.filterCategoriesData]}>
                                    <FilterCategoriesData/>
                                </View>
                            </Col>
                        </Row>
                    </Grid>
                </View>
            </View>
        )
    }
}
