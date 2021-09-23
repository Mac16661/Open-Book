import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";

import Book from "./Book";

/*
  TODO: BookList -> Book(through props) -> Read(through navigation)

  TODO: This gonna call server for list of books and pass it down to Book component
*/

const baseURL = "http://192.168.43.239:3000";

const renderItem = ({ item }) => {
  return (
    <View style={styles.viewContainer}>
      <Book id={item.id} title={item.title} />
    </View>
  );
};

const BookList = ({ navigation }) => {

  const [data, setData] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Recommended Books",
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 15,}} onPress={() => console.log("Left")}>
          <Icon name='menu' type='material' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 15,}} onPress={() => console.log("Right")}>
          <Icon name='search' type='material' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  async function getBooks() {
    await axios.get(`${baseURL}/books`).then((response) => {
      setData(response.data)
    }).catch(err => console.log(err.message))
  }

  useEffect(() => {
    getBooks();
  },[])



  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 10}}></View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default BookList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewContainer: {
    width: 150,
    height: 200,
    margin: 15,
  },
});
