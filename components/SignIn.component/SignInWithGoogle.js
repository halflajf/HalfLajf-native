import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import firebase, { googleProvider } from "../../firebase.js";

class SignInWithGoogle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    console.log("Google Auth Response", googleUser);

    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = googleProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function() {
              console.log("user signed it");
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behavior: "web",
        androidClientId:
          "623585970782-tuo9bbea7jral6fuh2l4t3s7fck5fvcp.apps.googleusercontent.com",
        //"623585970782-t6tetrgclucfou7ncatjjtjk5stqs6tt.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.onSignIn(result);
        this.props.navigation.navigate("User");
        alert("User successfully logged in");
        return result.accessToken;
      } else {
        console.log(result);
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e.toString());
      return { error: true };
    }
  };
  render() {
    return (
      <View style={{ paddingLeft: 10 }}>
        <TouchableOpacity onPress={this.signInWithGoogleAsync}>
          <Image source={require("../../assets/images/google.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default SignInWithGoogle;
