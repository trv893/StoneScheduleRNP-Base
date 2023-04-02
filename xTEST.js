import React from 'react';
import { View } from 'react-native';
import { SmallCircleButton, MediumCircleButton, SmallPillButton, MediumPillButton } from './utils/buttonFunctions';

const XTest = () => {
  const onSmallCirclePress = () => {
    console.log('Small circle button pressed');
  };

  const onMediumCirclePress = () => {
    console.log('Medium circle button pressed');
  };

  const onSmallPillPress = () => {
    console.log('Small pill button pressed');
  };

  const onMediumPillPress = () => {
    console.log('Medium pill button pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SmallCircleButton onPress={onSmallCirclePress} />
      <MediumCircleButton onPress={onMediumCirclePress} />
      <SmallPillButton onPress={onSmallPillPress} />
      <MediumPillButton onPress={onMediumPillPress} />
    </View>
  );
};

export default XTest;
