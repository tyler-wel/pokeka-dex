/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// React
import * as React from 'react';
import { Button, View, Text } from "react-native";
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Decklists } from "screens/decklists"
import { MyCollection } from "screens/my_collection"
import { SearchScreen } from "screens/search"
import { ScanScreen } from "screens/scan";
import { OtherScreen } from "screens/other";

// Main tab navigator
const BottomTab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Search"
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          showIcon: true,
          showLabel: true
        }}
      >
        <BottomTab.Screen
          name="Decklists"
          component={Decklists}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="My Collection"
          component={MyCollection}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="albums" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="camera" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Other"
          component={OtherScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default App;
