import React from 'react'
import styles from './styles'
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Tabs } from '../../../Auth/Accounts/Contact/node_modules/antd-mobile'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { brandYellow } from '../../../../../theme/Colors'

export interface OrderHistoryProps {
navigate : any;
}
export default class OrderHistory extends React.Component<OrderHistoryProps>{
    state = {
        index: 0,
        routes: [
          { key: 'active', title: 'ActiveOrders' },
          { key: 'delivered', title: 'DeliveredOrders' },
          { key: 'canceled', title: 'CanceledOrders' },
        ],
      };
    ActiveOrders = () => (
        <View style={[styles.list]}>
            <View style={[styles.listItem]}>
                <View >
                    <Text style={[styles.text]}>Order Amount : Rs 9,420</Text>
                    <Text style={[styles.text]}>Order Items : 2</Text>
                    <Text style={[styles.text]}>Order Date : 21 Dec 2017</Text>
                </View>
                <View >
                    <TouchableOpacity style={[styles.button, styles.trackBtn]} onPress={() => { }}>
                        <Text style={[styles.activeText, styles.buttonText]}>Active Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    DeliveredOrders = () => (
        <View style={[styles.list]}>
            <View style={[styles.listItem]}>
                <View >
                    <Text style={[styles.text]}>Order Amount : Rs 9,420</Text>
                    <Text style={[styles.text]}>Order Items : 2</Text>
                    <Text style={[styles.text]}>Order Date : 21 Dec 2017</Text>
                </View>
                <View >
                    <TouchableOpacity style={[styles.deliveredBtn]}>
                            <Text style={[[styles.deliveredText], styles.buttonText]}>DELIVERED</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    CanceledOrders = () => (
        <View style={[styles.list]}>
            <View style={[styles.listItem]}>
                <View >
                    <Text style={[styles.text]}>Order Amount : Rs 9,420</Text>
                    <Text style={[styles.text]}>Order Items : 2</Text>
                    <Text style={[styles.text]}>Order Date : 21 Dec 2017</Text>
                </View>
                <View >
                    <TouchableOpacity style={[styles.canceledBtn]} >
                            <Text style={[[styles.canceledText], styles.buttonText]}>CANCELED</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollBox]}>
                    <View style={[styles.content]}>
                        <TabView
                            navigationState={ this.state }
                            renderScene={SceneMap({
                                active: this.ActiveOrders,
                                delivered: this.DeliveredOrders,
                                canceled: this.CanceledOrders
                            })}
                            onIndexChange={index => this.setState({ index })}
                            initialLayout={{ width: Dimensions.get('window').width }}
                            renderTabBar={props =>
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: brandYellow }}
                                    labelStyle={{ color: '#555' }}
                                    activeColor={'#000'}
                                    style={{ backgroundColor: '#f2f2f7', elevation: 0 }}
                                />
                            }
                        />
                    </View>
                </ScrollView>
                <View>
                    <TouchableOpacity style={[styles.footerBtn]} onPress={() => { }} >
                         <Text style={[[styles.canceledText], styles.buttonText]}>PLACE NEW ORDER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

