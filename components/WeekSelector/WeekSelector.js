import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Card, Text, Button, IconButton, useTheme } from 'react-native-paper';
import { format, addDays, subDays, } from '../../utils/helper';
import DayCard from './DayCard';

const WeekSelector = ({ onStartDateChange }) => {
  const { colors } = useTheme();
  const [currentStartDate, setCurrentStartDate] = useState(new Date());
  const { width: screenWidth } = useWindowDimensions();
  const handlePreviousWeek = (currentStartDate) => {
    const newStartDate = subDays(currentStartDate, 7);
    setCurrentStartDate(newStartDate);
    onStartDateChange(newStartDate);
  };

  const handleNextWeek = (currentStartDate) => {
    const newStartDate = addDays(currentStartDate, 7);
    setCurrentStartDate(newStartDate);
    onStartDateChange(newStartDate);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = addDays(currentStartDate, i);
      const isFirst = i === 0;
      const isLast = i === 6;
      days.push(<DayCard key={i} date={date} isFirst={isFirst} isLast={isLast} />);
    }
    return days;
  };

  return (
    <View style={[styles.container, { width: screenWidth, backgroundColor: colors.background,  }]}>
      <IconButton
        onPress={() => handlePreviousWeek(currentStartDate)}
        icon="chevron-left"
        color={colors.surface}
        size={26}
        
        style={[
          styles.iconButton,
          { backgroundColor: colors.primary, borderColor: colors.info },
        ]}
      />
      <View style={{ flexDirection: 'row' }}>{renderDays()}</View>
      <IconButton
        onPress={() => handleNextWeek(currentStartDate)}
        icon="chevron-right"
        color={colors.surface}
        size={26}
        
        style={[
          styles.iconButton,
          { backgroundColor: colors.primary, borderColor: colors.info },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,

  },
  iconButton: {
    borderWidth: 2,
    borderRadius: 50,
    elevation: 12,
    padding: 4,
    width: 40, // Set the width
    height: 52, // Set the height
    justifyContent: 'center', // Center the icon vertically
  },
});

export default WeekSelector;
