<<<<<<< Updated upstream
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
=======
import * as React from 'react';
import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FilterFoodgrains from './src/screen/filterfoodgrains';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fruits from './src/screen/Fruits';
import Snacks from './src/screen/snacks';
import Foodgrains from './src/screen/Foodgrains';
import Bakery from './src/screen/bakery';
import Eggs from './src/screen/eggs';
import Baby from './src/screen/baby';
import Kitchen from './src/screen/kitchen';
import Beauty from './src/screen/beauty';
import Cleaning from './src/screen/cleaning';
import Gourmet from './src/screen/gourmet';
import Beverages from './src/screen/beverages';
import FilterFruits from './src/screen/FilterFruits';
import Header1 from './src/components/header1';
import Header from './src/components/header';
import Category from './src/screen/categories';
import HomeScreen from './src/screen/Homescreen';
import Offers from './src/screen/offers';
import Basket from './src/screen/basket';
import Search from './src/screen/search';
import Learn from './src/screen/learn';
// const App = () => {
//   return (
//     <>
//       <SafeAreaView>
//         <Learn />
//       </SafeAreaView>
//     </>
//   );
// };
// export default App;
>>>>>>> Stashed changes

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation({navigation}) {
  return (
<<<<<<< Updated upstream
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Text style={{textAlign:'center'}}>Hello</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
=======
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home-circle' : 'home-circle'}
                size={size}
                color={color}
                style={{marginTop: 3}}
              />
            );
          } else if (route.name === 'Category') {
            return (
              <MaterialCommunityIcons
                name={
                  focused
                    ? 'format-list-bulleted-square'
                    : 'format-list-checkbox'
                }
                size={size}
                color={color}
                style={{marginTop: 3}}
              />
            );
          } else if (route.name === 'Offers') {
            return (
              <MaterialCommunityIcons
                name={
                  focused
                    ? 'currency-usd-circle-outline'
                    : 'currency-usd-circle-outline'
                }
                size={size}
                color={color}
                style={{marginTop: 3}}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Ionicons
                name={focused ? 'search-outline' : 'search-outline'}
                size={size}
                color={color}
                style={{marginTop: 3}}
              />
            );
          } else if (route.name === 'Basket') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'cart' : 'cart'}
                size={size}
                color={color}
                style={{marginTop: 3}}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#537e2c',
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="Basket" component={Basket} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={TabNavigation}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Fruits"
          component={Fruits}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Snacks"
          component={Snacks}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Foodgrains"
          component={Foodgrains}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Bakery"
          component={Bakery}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Eggs"
          component={Eggs}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Beauty"
          component={Beauty}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Kitchen"
          component={Kitchen}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Beverages"
          component={Beverages}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Cleaning"
          component={Cleaning}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Gourmet"
          component={Gourmet}
        />
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Baby"
          component={Baby}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> Stashed changes
