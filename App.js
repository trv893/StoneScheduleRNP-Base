import React from 'react';
import { Provider as PaperProvider, DefaultTheme  } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DailyScreen from './screens/DailyScreen/DailyScreen';
import ScheduleScreen from './screens/ScheduleScreen/ScheduleScreen';
import WeeklyScreen from './screens/WeeklyScreen/WeeklyScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import RootNavigator from './navigation/RootNavigator'

// *** UNCOMMENT BELOW TO USE CUSTOM FONTS ***
          // import { useFonts } from 'expo-font';
          // const loadFonts = async () => {
          //   await Font.loadAsync({
          //     'MyCustomFont-Regular': require('./assets/fonts/************.ttf'), // *** REPLACE WITH YOUR FONT FILE ***
          //     'MyCustomFont-Bold': require('./assets/fonts/************.ttf'),  // *** REPLACE WITH YOUR FONT FILE ***
          //   });
          // };
// *** UNCOMMENT ABOVE TO USE CUSTOM FONTS ***

// *** UNCOMMENT BELOW TO USE SETTINGS SCREEN NAVIGATOR ***
      // const SettingsStack = () => (
      //   <Stack.Navigator>
      //     <Stack.Screen name="Profile" component={ProfileScreen} />
      //     <Stack.Screen name="Settings" component={SettingsScreen} />
      //   </Stack.Navigator>
      // );
// *** UNCOMMENT ABOVE TO USE SETTINGS SCREEN NAVIGATOR ***

// Define your custom colors here
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'red',
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
}