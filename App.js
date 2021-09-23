import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import BottomTabNav from "./navigation/BottomTabNav";


export default function App() {
  return (

      <BottomTabNav />

  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
