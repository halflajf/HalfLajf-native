import React from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import UploadImgFromGallery from "../components/UploadImg.component/UploadImgFromGallery";

class ProfileScreen extends React.Component {
  state = { currentUser: null };
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <View style={{paddingTop:20}}>
        
        {currentUser && <Text style={{fontSize:19}}>
                                   <Text style={{fontWeight:"bold"}}>User id:{"\n"} </Text> {currentUser.uid}!
                        </Text>}
        <Text style={{fontSize:19}}>
         <Text style={{fontWeight:'bold'}}>Your Email: {"\n"} </Text> {currentUser && currentUser.email}!
        </Text>
        <UploadImgFromGallery
          navigation={this.props.navigation}
          authUser={currentUser}
        />
      </View>
    );
  }
}

export default ProfileScreen;
