import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';
import { useTheme } from '../theme';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      
    </HomeStack.Navigator>
  );
}
