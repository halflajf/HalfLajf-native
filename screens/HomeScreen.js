import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "",
    header: null
  };

  render() {
    return (
        <ScrollView style = {styles.containter}>
          <Text>ekran testowy</Text>
        </ScrollView>
    );
  }
};

const styles = StyleSheet.create ({
  containter: {
    margin:10,
    flex:1,
  }
})