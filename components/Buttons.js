import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const CustomButtons = ({ onSmallCirclePress, onMediumCirclePress, onSmallPillPress, onMediumPillPress }) => {
  return (
    <>
      <Button
        mode="contained"
        compact={true}
        style={[styles.smallButton, styles.circleButton]}
        onPress={onSmallCirclePress}>
        Small
      </Button>

      <Button
        mode="contained"
        compact={true}
        style={[styles.mediumButton, styles.circleButton]}
        onPress={onMediumCirclePress}>
        Medium Circle
      </Button>

      <Button
        mode="contained"
        compact={true}
        style={[styles.smallButton, styles.pillButton]}
        onPress={onSmallPillPress}>
        Small Pill
      </Button>

      <Button
        mode="contained"
        uppercase={true}
        compact={true}
        style={[styles.mediumButton, styles.pillButton]}
        onPress={onMediumPillPress}>
        Medium Pill
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  smallButton: {
    minWidth: 100,
    margin: 10,
  },
  mediumButton: {
    minWidth: 150,
    margin: 10,
  },
  circleButton: {
    borderRadius: 100,
  },
  pillButton: {
    borderRadius: 25,
  },
});

export default CustomButtons;
