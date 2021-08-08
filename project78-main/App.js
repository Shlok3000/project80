import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPicScreen from './Screen/DailyPicScreen';
import HomeScreen from './Screen/HomeScreen';
import SpaceCraftScreen from './Screen/SpaceCraftsScreen';
import StarMapScreen from './Screen/StarMapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOption={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen} />
          <Stack.Screen name="DailyPic" component={DailyPicScreen} />
          <Stack.Screen name="StarMap" component={StarMapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}