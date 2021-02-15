import React, { Component } from 'react';
import { Button, FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

export function Categories() {
  const navigation = useNavigation();
  const data = [
            {
                image: require('../../../../../assets/images/men.jpg'),
                name: 'MEN',
                link: 'subCategories'
            },
            {
                image: require('../../../../../assets/images/women.jpg'),
                name: 'WOMEN',
                link: 'subCategories'
            },
            {
                image: require('../../../../../assets/images/watch.jpg'),
                name: 'KIDS',
                link: 'subCategories'
            }, {
                image: require('../../../../../assets/images/watch.jpg'),
                name: 'WATCHES',
                link: 'subCategories'
            },
            {
                image: require('../../../../../assets/images/travel.jpg'),
                name: 'TRAVEL',
                link: 'subCategories'
            },
            {
                image: require('../../../../../assets/images/offers.jpg'),
                name: 'OFFERS',
                link: 'subCategories'
            },
            {
                image: require('../../../../../assets/images/more.jpg'),
                name: 'MORE',
                link: 'subCategories'
            }
        ];
  return (
    <View>
      <Button
        title="Button"
        onPress={() => {
          navigation.navigate('Products', { name: "Product1" });
        }}
      />
      <TestComponent2 navigation={navigation}></TestComponent2>

    </View>
  );
}


interface testProps {
  navigation: any
}

export class TestComponent2 extends Component<testProps> {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Text>Test component 2</Text>
        <Text>Category</Text>
        <Button
          title="Button"
          onPress={() => {
            navigation.navigate('Products', { name: "Product1" });
          }}
        />
        <FlatList
data={data}
showsHorizontalScrollIndicator={false}
             keyExtractor={(item, idx) => item.name + idx}
horizontal={true}
renderItem={({ item }) =>
<TouchableOpacity key={item.name} onPress={() => {
navigation.navigate("Products", { name: item.name });
                     console.log(item.name);
               }}>
                    <View style={styles.category}>
                   <Image source={item.image} style={[styles.categoryImage]}
                             resizeMode="cover" />
                    <Text style={[styles.categoryName]}>{item.name}</Text>
                     </View>
             </TouchableOpacity >
            }
       />
      </SafeAreaView>
    );
  }
}

// import React from 'react';
// import styles from './styles';
// import {
//     View,
//     SafeAreaView,
//     Text,
//     Image,
//     FlatList,
//     TouchableHighlight,
//     TouchableOpacity,
//     ScrollView
// } from 'react-native'
// import { NavigationInjectedProps } from 'react-navigation';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { HomeParamList, HomeStackNavProps } from '../../../../core/types/Routing/Routes';
// interface CategoriesProps {
// }
// export const Categories = (navigation: any)=>{
//     return(<View><Text>test</Text></View>)
// }
// // export const Categories= (navigation: any)=>{
// //     const data = [
// //         {
// //             image: require('../../../../../assets/images/men.jpg'),
// //             name: 'MEN',
// //             link: 'subCategories'
// //         },
// //         {
// //             image: require('../../../../../assets/images/women.jpg'),
// //             name: 'WOMEN',
// //             link: 'subCategories'
// //         },
// //         {
// //             image: require('../../../../../assets/images/watch.jpg'),
// //             name: 'KIDS',
// //             link: 'subCategories'
// //         }, {
// //             image: require('../../../../../assets/images/watch.jpg'),
// //             name: 'WATCHES',
// //             link: 'subCategories'
// //         },
// //         {
// //             image: require('../../../../../assets/images/travel.jpg'),
// //             name: 'TRAVEL',
// //             link: 'subCategories'
// //         },
// //         {
// //             image: require('../../../../../assets/images/offers.jpg'),
// //             name: 'OFFERS',
// //             link: 'subCategories'
// //         },
// //         {
// //             image: require('../../../../../assets/images/more.jpg'),
// //             name: 'MORE',
// //             link: 'subCategories'
// //         }
// //     ]
// //     return (
// //         <View>

// //         </View>
// //         // <SafeAreaView >
// //         // <Text>Category</Text>
// //         //         <FlatList
// //         //             data={data}
// //         //             showsHorizontalScrollIndicator={false}
// //         //             keyExtractor={(item, idx) => item.name + idx}
// //         //             horizontal={true}
// //         //             renderItem={({ item }) =>
// //         //                 <TouchableOpacity key={item.name} onPress={() => {
// //         //                     navigation.navigate("Products", { name: item.name });
// //         //                     console.log(item.name);
// //         //                 }}>
// //         //                     <View style={styles.category}>
// //         //                         <Image source={item.image} style={[styles.categoryImage]}
// //         //                             resizeMode="cover" />
// //         //                         <Text style={[styles.categoryName]}>{item.name}</Text>
// //         //                     </View>
// //         //                 </TouchableOpacity >
// //         //             }
// //         //         />
// //         //     </SafeAreaView>
// //         // // <ScrollView></ScrollView>
// //     )
// //   } 
// //   export default Categories;
