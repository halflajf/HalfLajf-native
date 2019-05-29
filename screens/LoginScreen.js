import React from "react";
import { Text, View, Button } from "react-native";
import SignInWithEmail from "../components/SignIn.component/SignInWithEmail";
import SignInWithGoogle from "../components/SignIn.component/SignInWithGoogle";
import SignInWithFacebook from "../components/SignIn.component/SignInWithFacebook";

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flexDirection: "column" }}>
        <View style={{ paddingVertical: 20 }}>
          <SignInWithEmail navigation={this.props.navigation} />
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: "bold"
          }}
        >
          Or log in using social media!{" "}
        </Text>
        <View
          style={{ flexDirection: "row", padding: 10, paddingVertical: 40 }}
        >
          <SignInWithGoogle navigation={this.props.navigation} />
          <View style={{}}>
            <SignInWithFacebook navigation={this.props.navigation} />
          </View>
        </View>

        <View style={{ alignSelf: "auto", alignContent: "flex-end" }}>
          <Button
            color="#f57c00"
            title="Don't have an account? Sign Up"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </View>
      </View>
    );
  }
}
//

export default LoginScreen;
