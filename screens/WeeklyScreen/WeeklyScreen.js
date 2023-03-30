import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const WeeklyScreen = () => {
  return (
    <View>
      <Appbar>
        <Appbar.Content title="Weekly Screen" />
      </Appbar>
      <Text>Weekly Screen Content</Text>
    </View>
  );
};

export default WeeklyScreen;
