import React from "react";
import {ScrollView, Text, Button, Dimensions } from "react-native";
import Image from 'react-native-scalable-image';
import { Accelerometer } from "expo";
const API = "https://some-random-api.ml/meme";

class RandomMemScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mem: {},
      isLoading: false,
      error: null,
      accelerometerData: { x: 0 }
    };
  }
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.getRandomMem();
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    Accelerometer.setUpdateInterval(1700);
    Accelerometer.addListener(item => {
      this.setState({ accelerometerData: item.x * 100 });
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  getRandomMem = () => {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ mem: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { mem, isLoading, error } = this.state;

    if (error) {
      return <Text>{error.message}</Text>;
    }

    if (isLoading) {
      return <Text>Loading ...</Text>;
    }

    return (
      <>
      <ScrollView>
        <Image
          source={{ uri: mem.image }}
          width={Dimensions.get('window').width}
        />
        {this.state.accelerometerData < -10 && this.getRandomMem()}

      </ScrollView>
      <Button 
              color="#f57c00"
              title="Roll next!"
              onPress={this.getRandomMem}  
      />
      </>
    );
  }
}

export default RandomMemScreen;
