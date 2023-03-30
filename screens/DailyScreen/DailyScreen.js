import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const DailyScreen = () => {
  return (
    <View>
      <Appbar>
        <Appbar.Content title="Daily Screen" />
      </Appbar>
      <Text>Daily Screen Content</Text>
    </View>
  );
};

export default DailyScreen ;
