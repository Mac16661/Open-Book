import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native";

const Book = ({id, title}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Read',{id: id, title: title})} >
      <View style={styles.container}>
        <Image style={styles.img} source={require("../../assets/Dev.png")} />
      </View>
    </TouchableOpacity>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    display: 'flex',
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
