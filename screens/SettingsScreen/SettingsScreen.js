import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const SettingsScreen = () => {
  return (
    <View>
      <Appbar>
        <Appbar.Content title="Settings Screen" />
      </Appbar>
      <Text>Settings Screen Content</Text>
    </View>
  );
};

export default SettingsScreen ;
