import React from "react";
import firebase from "firebase";
import { View, Button, Text, FlatList, Dimensions } from "react-native";
import { ListItem } from "react-native-elements";
import Notification from "../notification";
import { ScrollView } from "react-native-gesture-handler";
import Image from "react-native-scalable-image";

class MemesScreen extends React.Component {
  state = {
    currentUser: null,
    memes: [],
    searchValue: "",
    loading: false,
    error: null
  };
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });

    this.onListenForMemes();
  }

  onListenForMemes() {
    this.setState({ loading: true });
    firebase
      .database()
      .ref("memes")
      .on("value", snapshot => {
        const memObject = snapshot.val();

        if (memObject) {
          const memesList = Object.keys(memObject).map(key => ({
            ...memObject[key],
            uid: key
          }));
          this.setState({ memes: memesList, loading: false });
        } else {
          this.setState({ memes: null, loading: false });
        }
        this.setState({ loading: false });
      });
  }

  componentWillUnmount() {
    firebase
      .database()
      .ref("memes")
      .off();
  }

  onSearchValue = input => {
    this.onListenForMemes();
    this.setState({ searchValue: input }, () => this.getMemesByTag());
  };

  getMemesByTag = () => {
    this.setState({
      memes: this.state.memes.filter(mem =>
        mem.tags.includes(this.state.searchValue)
      )
    });
  };

  getAllMemes = () => {
    this.onListenForMemes();
  };
  render() {
    const { currentUser, memes, loading } = this.state;
    
    return (
      <ScrollView style={{paddingTop:25}}>
        {currentUser && <Notification user={currentUser} />}
        <View style={{flexDirection:'row', width:'auto',backgroundColor:'#f57c00'}}>
          <Button style={{borderWidth:1, borderColor: "black"}} color="#f57c00" onPress={this.getAllMemes} title="Wszystkie" />
          <Button color="#f57c00" onPress={() => this.onSearchValue("#janusz")} title="#śmieszne" />
          <Button color="#f57c00" onPress={() => this.onSearchValue("#zwierze")}title="#zwierze"/>
          <Button style={{alignSelf:'stretch'}}color="#f57c00" onPress={() => this.onSearchValue("#maciek")} title="#hobby" />
        </View>
        {loading ? (
          <Text>Loading Memes...</Text>
        ) : (
          <View>
            {memes.length ? (
              <View>
                {memes.map(mem => (
                  <FlatList
                    data={[{ key: mem.uid }]}
                    renderItem={({ item }) => (
                      <ScrollView
                        style={{
                          paddingVertical: 20,
                          borderColor: "f57c00",
                          borderWidth: 2
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 35,
                            fontWeight: "bold",
                            alignSelf: "center"
                          }}
                        >
                          Tytuł: {mem.title}
                        </Text>
                        <Text>by: {mem.username}</Text>
                        <Image
                          source={{ uri: mem.url }}
                          width={Dimensions.get("window").width}
                          style={{ paddingVertical: 10 }}
                        />
                      </ScrollView>
                    )}
                  />
                ))}
              </View>
            ) : (
              <Text>There are no memes ...</Text>
            )}
          </View>
        )}
      </ScrollView>
    );
  }
}
export default MemesScreen;

