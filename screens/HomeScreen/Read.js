import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";

//TODO: This component gonna do network call and fetch the stories by id which will be provided by route

const baseURL = "http://192.168.43.239:3000";

const Read = ({ route, navigation }) => {

  const [story, setStory] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => console.log("Right")}
        >
          <Icon name="dots-vertical" type="material-community" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  async function getBook() {
    await axios.post(`${baseURL}/book`, { id: route.params.id})
    .then((res) => {
      setStory(res.data);
    }, (error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getBook();
  },[navigation])

  return (
    <View style={styles.container}>
      <Text>{story}</Text>
    </View>
  );
};

export default Read;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
