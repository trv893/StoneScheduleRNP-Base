import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { useTheme, Card, Title, IconButton, List, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { consoleLogTest, filterShiftData } from '../../utils/helper';
import { AppContext } from '../../contexts/AppContext';
import DayTimeCard from './subComponents/DayTimeCard';
import WorkingStatus from './subComponents/WorkingStatus';
import ShiftTradeModal from './subComponents/ShiftTradeModal';
import ShiftStats from './subComponents/ShiftStats';
import ReleasedShifts from './subComponents/ReleasedShifts';

const ShiftCard = ({ date, shiftTime }) => {
  //shifts example: [{"shiftAssignmentId":5992,"userId":2,"shiftId":1,"dateAssigned":"2023-03-31T00:00:00","sectionId":15,"releasedByUser":false,"dayId":6,"section":"15","assignee":"Aleesha Jowett","releaseByUserId":0,"shiftName":"AM"},...]
  //shiftTime example: "AM" or "PM"
  const { userId } = useContext(AppContext);
  const { colors } = useTheme();
  const { width: screenWidth } = useWindowDimensions();

  const icon = shiftTime === 'AM' ? 'weather-sunny' : 'weather-night';

  return (
    <View style={[styles.container, {width: screenWidth}]}>
      <Card style={styles.card}>
        <Card.Content style={{ backgroundColor: colors.primary }}>
          <DayTimeCard style={styles.DayTimeCard} currentUseDate={date} shiftTime={shiftTime} />
          <ReleasedShifts style={styles.ReleasedShifts} currentUseDate={date} currentShiftTime={shiftTime} />
          <WorkingStatus style={styles.WorkingStatus} currentUseDate={date} currentShiftTime={shiftTime}></WorkingStatus>
          <ShiftTradeModal style={styles.ShiftTradeModal} currentUseDate={date}></ShiftTradeModal>
          <ShiftStats style={styles.ShiftStats} currentUseDate={date}></ShiftStats>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  DayTimeCard: {
    //alignSelf: 'flex-start',
  },
  WorkingStatus: {
  },
  ShiftTradeModal: {
  },
  ShiftStats: {
  },

});



export default ShiftCard;
