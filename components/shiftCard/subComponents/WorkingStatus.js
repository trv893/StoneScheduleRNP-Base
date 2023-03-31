import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { useTheme, Card, Title, IconButton, List, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';

const WorkingStatus = ({ currentUseDate, currentShiftTime }) => {
  const { aggShiftData, userId } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState(null);
  const { width: screenWidth } = useWindowDimensions();
  const maxContainerWidth = screenWidth;
  const { colors } = useTheme();

  useEffect(() => {
    const filteredShiftData = filterShiftData(aggShiftData, { date: currentUseDate, userId: userId, shiftTime: currentShiftTime });
    setFilteredData(filteredShiftData);
  }, [aggShiftData, currentUseDate, currentShiftTime, userId]);

  //consoleLogTest('filteredShiftData data:', filteredData);

  if (filteredData===null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {filteredData == false ? (
        <Text>Not Scheduled</Text>
      ) : (
        <Text>Working Section: {filteredData['section']}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
});

export default WorkingStatus;
