import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookList from "./BookList";
import Read from "./Read";

const HomeStack = createStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator 
      intitialRouteName="All Books"
      screenOptions={{headerTitleAlign: 'center'}}
    >
      <HomeStack.Screen name="All Books" component={BookList} />
      <HomeStack.Screen name="Read" component={Read} />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
