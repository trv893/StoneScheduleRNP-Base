import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { useTheme, Card, Title, IconButton, List, Button } from 'react-native-paper';
import ShiftCard from '../../components/shiftCard/ShiftCard';
import { AppContext } from '../../contexts/AppContext';
import { consoleLogTest, filterShiftData } from '../../utils/helper';

const DailyScreen = () => {
  const [currentUseDate, setCurrentUseDate] = useState(new Date());
  const { width: screenWidth } = useWindowDimensions();
  const maxContainerWidth = screenWidth;
  const { colors } = useTheme();

  //TODO: add a calander picker with red dots for days working that allows the user to select a date to view

  return (
    <View style={[styles.container, {width: screenWidth}]}>
      <Text style={{ color: colors.text }}>Daily Screen</Text>
        <ShiftCard date={currentUseDate} shiftTime="AM" />
        <ShiftCard date={currentUseDate} shiftTime="PM" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    flex: 1,
    alignItems: 'center',
  },
});

export default DailyScreen;
