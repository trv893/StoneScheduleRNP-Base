import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import WeekSelector from '../../components/WeekSelector/WeekSelector';

const WeeklyScreen = () => {
  const [currentStartDate, setCurrentStartDate] = useState(new Date());
  const { width: screenWidth } = useWindowDimensions();
  const maxContainerWidth = screenWidth;

  const { colors } = useTheme();

  const handleStartDateChange = (newStartDate) => {
    setCurrentStartDate(newStartDate);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background, maxWidth: maxContainerWidth }]}>
      <WeekSelector onStartDateChange={handleStartDateChange} />
      {/* Other components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default WeeklyScreen;
