import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import uuid from "uuid";
import { Expense } from '../../../core/ProductService/types/Expense';
import {
  addExpense,
  deleteExpense,
  getExpenseDetails,
  getExpenseList,
  updateExpense
} from '../../../core/ProductService/actions/Expenses';
import { View, Text } from '../../../../theme/Themed';
import { ApplicationState, AppState } from '../../../core/ProductService/reducers';
import { AnyAction } from "redux";
import { ExtractDataFromKey } from "../../../core/ProductService/services/HelperService";

import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Categories from '../Products/Categories';
import { BigBanner } from '../../../widgets/BigBanner';
import { GridofFour } from '../../../widgets/GridofFour';
import { ScrollingBanners } from '../../../widgets/ScrollingBanners';
import { GridofFive } from '../../../widgets/GridofFive';
import { ProductList } from '../../../widgets/ProductList';
import { GridandScroll } from '../../../widgets/GridandScroll';
import styles from './styles';

interface IHomePageProps {
}
interface IHomePageState {
}

interface ILinkStateProp {
  expense: { component_guid: string, data: any };
  pLoading: boolean;
  errors?: string;
}
interface ILinkDispatchProp {
  getExpenseList: (component_guid: string) => void,
  getExpenseDetails: (guid: string) => void,
  addExpense: (item: Expense) => void,
  updateExpense: (guid: string) => void,
  deleteExpense: (guid: string) => void
}
const mapStateToProps = ({ expense }: ApplicationState, ownProp: IHomePageProps): ILinkStateProp => {
  return {
    expense: { component_guid: ownProp.component_guid, data: expense.i.d },
    pLoading: expense.i.pL,
    errors: expense.i.err
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getExpenseList: (component_guid: string) => dispatch(getExpenseList(component_guid)),
    getExpenseDetails: (guid: string) => dispatch(getExpenseDetails(guid)),
    addExpense: (item: Expense) => dispatch(addExpense(item)),
    updateExpense: (guid: string) => dispatch(updateExpense(guid)),
    deleteExpense: (guid: string) => dispatch(deleteExpense(guid))
  }
}

type Props = IHomePageProps & ILinkDispatchProp & ILinkStateProp
// const styles = StyleSheet.create({
//   title: {
//     fontSize: 24,
//     color: '#3F3F3F',
//   },
//   subtitle: {
//     color: '#A5A5A5',
//   },
// })

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brywsernn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'qwenn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'qwe',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'bryhjkljnn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
];

class HomePage extends React.Component<Props, IHomePageState>{
  constructor(props: any) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick() {
    var expense: Expense = { id: "001", description: "test description", note: "test note", amount: 1111, createdat: new Date() };
    this.props.addExpense(expense);
  }
  componentDidMount() {
    this.props.getExpenseList(this.props.component_guid);
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return JSON.stringify(this.props.expense) != JSON.stringify(nextProps.expense);
  }
  getTable() {
    let tempData = ExtractDataFromKey(this.props.component_guid, this.props.expense.data);
    if (tempData != undefined) {
      return tempData.map(
        (i: Expense, index: number) => (
          <View key={index}>
            <Text key={index}>{i.description}{i.note}{i.amount}{i.createdat}</Text>
          </View>
        )
      )
    } else {
      return (<View></View>)
    }
  }
  render() {
    return (
      <>
        <ScrollView>
          <View style={[styles.container]}>
            <ScrollView>
              <Categories />
              {/* <BigBanner />
              <GridofFour />
              <ScrollingBanners />
              <GridandScroll />
              <ProductList />
              <GridofFive /> */}
            </ScrollView>
          </View>
          {/* <View>
            <Text>redux test</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.handleClick()}>
              <Text>Go to home screen!</Text>
            </TouchableOpacity>
          </View>

          {this.getTable()}
          <UserCard component_guid="" name="" Users={users} loading={false} ></UserCard>
          <BannerImage component_guid="" name=""></BannerImage>
          <AddCard></AddCard> */}
        </ScrollView>
      </>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);