import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
//import BigBanner from '../../../widgets/BigBanner';
import { GridandScroll } from '../../../widgets/GridandScroll';
import { GridofFive } from '../../../widgets/GridofFive';
import { GridofFour } from '../../../widgets/GridofFour';
import { ProductList } from '../../../widgets/ProductList';
import { ScrollingBanners } from '../../../widgets/ScrollingBanners';
import { NavigationInjectedProps, NavigationParams, NavigationState } from "react-navigation";
import { HomeStackNavProps } from '../../../core/ProductService/types/Routing/Routes';
import { Categories } from '../Products/Categories';
import { NavigationScreenProp } from "react-navigation";

export interface HomeProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export default class Home extends React.Component<HomeProps>{
  render() {
    return (
      <ScrollView>
        <View>
                <Button title="Products" onPress={() => { this.props.navigation.navigate("Products") }} />
                {/* <Categories /> */}
        </View>
      </ScrollView>
    )
  }
}


// export default function Home({ navigation }: HomeStackNavProps<"Home">) {
//   return (
//     <ScrollView>
//       <View>
//       <Text>hello</Text>
//       <Categories /> 
//       </View>

//       {/* <BigBanner nav={navigation} />
//         <GridofFour nav={navigation} />
//         <ScrollingBanners nav={navigation} />
//         <GridandScroll nav={navigation} />
//         <ProductList nav={navigation} />
//         <GridofFive nav={navigation} /> */}
//     </ScrollView>
//   )
// }


// import React, { Component } from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationInjectedProps, withNavigation } from 'react-navigation';

// class TestComponent extends Component<NavigationInjectedProps> {
//   render() {
//     const { navigation } = this.props;
//     return (
//       <Button
//         title="Button"
//         onPress={() => {
//           navigation.navigate('anotherTestScreen');
//         }}
//       />
//     );
//   }
// }

// export default withNavigation(TestComponent);