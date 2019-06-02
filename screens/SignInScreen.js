import React from "react";
import { View, ScrollView, StyleSheet, Text, Image, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Sign In With Email"
  };
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.state = { password: ''}
  }
  render() {
    return (
      <>
        

      <ScrollView style={styles.container}>
        <Text style = {{borderBottomWidth: 2, borderBottomColor:'grey'}}>Email:</Text>

        <TextInput
          style={{height: 40}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />

        <Text style = {{borderBottomWidth: 2, borderBottomColor:'grey'}}>Password:</Text>
        <TextInput secureTextEntry={true}
          style={{height: 40}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <Button
          onPress={console.log("pressed")/*funkcja jsowa*/ }
          title="Sing Up"
          color="#f57c00"
          accessibilityLabel="SignUp data submit button"
        />
      </ScrollView>
      
      <View style={{alignContent: 'center', alignItems: 'center'}}>
        <Text style={{paddingBottom:'7%'}}>Or Sign in With Social Media</Text>
        <Image style={{padding:'2%'}}  source={require('../assets/images/facebook.png')} />
        <Image style={{paddingBottom:'2%'}} source={require('../assets/images/google.png')}/> 
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#fff",
    margin: 0,
    
  }
});
