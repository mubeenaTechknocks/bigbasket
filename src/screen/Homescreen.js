import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header1 from '../components/header1';
import Swp1 from '../components/Swp1';
import SwipL from '../components/SwipL';
import Imgi from '../components/Imgi';
import Options from '../components/options';
import Banner2 from '../components/Banner2';
import Sby from '../components/Sby';
import Drawer from '../components/drawer/drawer';
import Foodgrains from '../screen/Foodgrains';
export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />

        <View>
          <Header1 data={true} />
          <View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#efeeda',
                  paddingVertical: 9,
                  borderRadius: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#dfdecb',
                }}
                onPress={() => this.props.navigation.push('Foodgrains')}>
                <Text>dummy data</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              contentContainerStyle={{flexGrow: 1}}>
              <View>
                <View style={{backgroundColor: 'white'}}>
                  <Swp1 data={simages} />
                </View>
                <View style={{backgroundColor: 'white'}}>
                  <Imgi data={banner1} />
                </View>
                <View style={styles.swipL}>
                  <SwipL data={simages2} />
                </View>

                <View style={styles.sb_head}>
                  <Image
                    source={require('../../assets/homescreen/sb_head.jpeg')}
                    resizeMode="contain"
                    style={{flex: 1, width: '100%', height: undefined}}
                  />
                </View>
                <View>
                  <Sby data={sby1} />
                </View>

                <View style={styles.options}>
                  <Options data={options1} />
                  <Options data={options2} />
                  <Options data={options3} />
                </View>

                <View style={{marginTop: 10}}>
                  <Banner2 data={banner2} />
                </View>

                <View style={{marginVertical: 10}}>
                  <Swp1 data={swpimgs3} />
                </View>
                <View style={{height: 230}}></View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const simages = [
  {
    swp: require('../../assets/homescreen/swp/swipe1.jpeg'),
    key: 11,
    title: 'Fruits',
  },
  {
    swp: require('../../assets/homescreen/swp/swipe2.jpeg'),
    key: 12,
    title: 'Fruits',
  },
  {
    swp: require('../../assets/homescreen/swp/swipe3.jpeg'),
    key: 13,
    title: 'Fruits',
  },
];
const simages2 = [
  {swp: require('../../assets/homescreen/swp/swipe2.3.jpeg')},
  {swp: require('../../assets/homescreen/swp/swp2.1.jpeg')},
  {swp: require('../../assets/homescreen/swp/swp2.2.jpeg')},
];
const swpimgs3 = [
  {swp: require('../../assets/homescreen/swp/swipe3.1.jpg')},
  {swp: require('../../assets/homescreen/swp/swipe3.2.jpeg')},
  {swp: require('../../assets/homescreen/swp/swipe3.3.jpeg')},
];
const banner1 = [
  {pic: require('../../assets/homescreen/banner/pic1.jpeg'), key: 1},
];
const banner2 = [{pic: require('../../assets/homescreen/banner/banner2.jpg')}];
const sby1 = [
  {pic: require('../../assets/homescreen/option/one.jpeg'), screen: 'Fruits'},
  {pic: require('../../assets/homescreen/option/twoo.jpeg'), screen: 'snacks'},
];
const options1 = [
  {
    image: require('../../assets/homescreen/option/one.jpg'),
    h: 140,
    w: 132,
    screen: 'Foodgrains',
  },
  {
    image: require('../../assets/homescreen/option/two.jpg'),
    h: 140,
    w: 132,
    screen: 'bakery',
  },
  {
    image: require('../../assets/homescreen/option/three.jpg'),
    h: 140,
    w: 132,
    screen: 'eggs',
  },
];
const options2 = [
  {
    image: require('../../assets/homescreen/option/five.jpg'),
    h: 140,
    w: 132,
    screen: 'beauty',
  },
  {
    image: require('../../assets/homescreen/option/four.jpg'),
    h: 140,
    w: 132,
    screen: 'kitchen',
  },
  {
    image: require('../../assets/homescreen/option/six.jpg'),
    h: 140,
    w: 132,
    screen: 'beverages',
  },
];
const options3 = [
  {
    image: require('../../assets/homescreen/option/seven.jpg'),
    h: 140,
    w: 132,
    screen: 'cleaning',
  },
  {
    image: require('../../assets/homescreen/option/eight.jpg'),
    h: 140,
    w: 132,
    screen: 'gourmet',
  },
  {
    image: require('../../assets/homescreen/option/nine.jpg'),
    h: 140,
    w: 132,
    screen: 'baby',
  },
];
const styles = StyleSheet.create({
  swipL: {height: 185, marginTop: 5, backgroundColor: '#E7F3A1'},
  options: {marginTop: 10},
  sb_head: {
    marginTop: 10,
    marginHorizontal: 10,
    height: 45,
    backgroundColor: '#E7F3A1',
  },
});
