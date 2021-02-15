import React, { useContext } from "react";
import { Text, Button, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "../../core/ProductService/services/UserService";
import { Ionicons } from "@expo/vector-icons";
import { HomeStack } from "../../components/Navigator/HomeStack";
import { TouchableOpacity } from "react-native-gesture-handler";
interface AppTabsProps {

}
const Tabs = createBottomTabNavigator();
function Filter() {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>Filter</Text>
      <Button title="Logout" onPress={() => logout()} ></Button>
    </View>
  )
}
function Sort() {
  return (
    <Text>Sort</Text>
  )
}
export const AppTabs: React.FC<AppTabsProps> = ({ }) => {
  return (<Tabs.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = "ios-information-circle";
      if (route.name === 'Sort') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else if (route.name === 'Filter') {
        iconName = focused ? 'ios-list-box' : 'ios-list';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tabs.Screen name="Filter" component={HomeStack}></Tabs.Screen>
    <Tabs.Screen name="Sort" component={Sort}></Tabs.Screen>
  </Tabs.Navigator>)
}