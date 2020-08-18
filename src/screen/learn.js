import React, {Component, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
const axios = require('axios');
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }
  //without axios url fetch
  //componentDidMount() {
  // fetch('http://192.168.18.14:3000/api/posts/')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     this.setState({data});
  //     this.setState({isLoading: false});
  //   })
  //   .catch((error) => console.error(error));
  //}
  async componentDidMount() {
    await axios
      .get('http://192.168.18.14:3000/api/posts/')
      .then((res) => {
        this.setState({data: res.data});
        this.setState({isLoading: false});
      })
      .catch((error) => console.error(error));
  }
  render() {
    const {data, isLoading} = this.state;

    return (
      <View style={{padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <View style={{backgroundColor: 'pink'}}>
              <Text>working</Text>

              <FlatList
                data={data}
                keyExtractor={(id) => id}
                renderItem={({item}) => (
                  <View>
                    <Text>
                      {item.name}, {item.price}
                    </Text>

                    <Image
                      resizeMode="contain"
                      style={{
                        flex: 1,
                        height: 20,
                        borderRadius: 2,
                      }}
                      source={{
                        uri: 'http://192.168.18.14:3000/' + item.productImage,
                      }}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
