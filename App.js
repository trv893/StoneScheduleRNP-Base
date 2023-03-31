import React, { useContext } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import RootNavigator from './navigation/RootNavigator';
import { AppProvider, AppContext } from './contexts/AppContext';
import { ActivityIndicator, View } from 'react-native';

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
const AppWrapper = () => {
  const { isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <RootNavigator />;
};

export default function App() {
  return (
    <AppProvider>
      <PaperProvider theme={theme}>
        <AppWrapper />
      </PaperProvider>
    </AppProvider>
  );
}