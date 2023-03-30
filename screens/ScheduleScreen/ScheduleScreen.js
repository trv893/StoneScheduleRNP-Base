import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const ScheduleScreen = () => {
  return (
    <View>
      <Appbar>
        <Appbar.Content title="Schedule Screen" />
      </Appbar>
      <Text>Schedule Screen Content</Text>
    </View>
  );
};

export default ScheduleScreen ;
