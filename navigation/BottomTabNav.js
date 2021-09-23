import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LibraryScreen from "../screens/LibraryScreen/LibraryScreen";


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="antdesign" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Library" component={LibraryScreen} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="library-books" type="material" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default BottomTabNav;
