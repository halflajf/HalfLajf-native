/*do poprawy mysle ze bordery na takie underline'y jak w webówce */

import React from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "SignUp"
  };
  constructor(props) {
    super(props);
    this.state = { username: ''}
    this.state = { email: '' };
    this.state = { password: ''}
    this.state = { confirmPassword: ''}
  }
  render() {
    return (
     
        

      <ScrollView style={styles.container}>
       <Text style = {{borderBottomWidth: 2, borderBottomColor:'grey'}}>Username:</Text>
       <TextInput
        style={{height: 40}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />

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

      <Text style = {{borderBottomWidth: 2, borderBottomColor:'grey'}}>Confirm password:</Text>
      <TextInput secureTextEntry={true}
        style={{height: 40}}
        onChangeText={(confirmPassword) => this.setState({confirmPassword})}
        value={this.state.confirmPassword}
      />

      <Button
        onPress={console.log("pressed")/*funkcja jsowa*/ }
        title="Sing Up"
        color="#f57c00"
        accessibilityLabel="SignUp data submit button"
      />
      <Text>{"\n"}{"\n"}You can also log in using social media accounts. </Text>
      </ScrollView>

      
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#fff",
    margin: 0
  }
});
