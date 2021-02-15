import React from 'react';
import styles from './styles';
import {View,Text,ScrollView} from 'react-native';
import GridofSix from './GridofSix';
import CategoriesList from './CategoriesList';
import { NavigationInjectedProps } from 'react-navigation';
export interface SubCatagoriesProps{
	nav: NavigationInjectedProps;
}

export default class SubCatagories extends React.Component<SubCatagoriesProps> {
	render() {
		return (
			<View style={[styles.container]}>
				<ScrollView>
					<CategoriesList/>
					<GridofSix/>
				</ScrollView>
			</View>
		)
	}
}