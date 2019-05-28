import React from "react";
import firebase from "firebase";

import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

class LogoutScreen extends React.Component {
  componentDidMount() {
    firebase.auth().signOut();
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Quitting</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default LogoutScreen;
