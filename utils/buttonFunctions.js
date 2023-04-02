// buttonFunctions.js
import React from 'react';
import CustomButtons from '../components/Buttons';

export const SmallCircleButton = ({ onPress }) => {
  return <CustomButtons onSmallCirclePress={onPress} />;
};

export const MediumCircleButton = ({ onPress }) => {
  return <CustomButtons onMediumCirclePress={onPress} />;
};

export const SmallPillButton = ({ onPress }) => {
  return <CustomButtons onSmallPillPress={onPress} />;
};

export const MediumPillButton = ({ onPress }) => {
  return <CustomButtons onMediumPillPress={onPress} />;
};
