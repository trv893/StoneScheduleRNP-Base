import React from 'react';
import { Provider as PaperProvider, DefaultTheme  } from 'react-native-paper';
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
const happyLightColors = {
  primary: '#6EC1E4', // Primary color: Soft blue, for buttons, active tabs, and important elements
  accent: '#F9A826',  // Accent color: Soft yellow-orange, for highlights and secondary actions
  background: '#F3F7FA', // Background color: Light grayish-blue, for main app background
  surface: '#FFFFFF', // Surface color: White, for cards and surfaces
  text: '#333333', // Text color: Dark gray, for primary text
  secondaryText: '#6F6F6F', // Secondary text color: Gray, for less important text
  error: '#F44336', // Error color: Soft red, for error messages and validation feedback
  info: '#2196F3', // Info color: Soft blue, for informational messages
  success: '#4CAF50', // Success color: Soft green, for success messages and indicators
  warning: '#FFC107', // Warning color: Soft amber, for warning messages and indicators
};


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...happyLightColors,
  },
  roundness: 8,
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
}