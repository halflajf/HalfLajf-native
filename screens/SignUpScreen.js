import React from "react";
import { Text, View } from "react-native";
import SignUp from "../components/SignUp.component";

class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
        <SignUp navigation={this.props.navigation} />
      </View>
    );
  }
}

export default SignUpScreen;
