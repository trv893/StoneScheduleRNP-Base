import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import WeekSelector from '../../components/WeekSelector/WeekSelector';


const ScheduleScreen = () => {
  const [currentStartDate, setCurrentStartDate] = useState(new Date());
  const { width: screenWidth } = useWindowDimensions();
  const maxContainerWidth = screenWidth * 0.9;

  const { colors } = useTheme();

  const handleStartDateChange = (newStartDate) => {
    setCurrentStartDate(newStartDate);
  };

  return (
    <View style={[styles.container, { backgroundColor: "#00FF00", maxWidth: maxContainerWidth }]}>
      <WeekSelector onStartDateChange={handleStartDateChange} />
      {/* Other components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScheduleScreen ;
