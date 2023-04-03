import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';
import shiftDataExample from '../../../assets/shiftDataExample.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShiftPickupButton from './ShiftPickupButton';


const ReleasedShifts = ({ currentUseDate, currentShiftTime }) => {

  const { aggShiftData, userId } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState(null);
  const [requestedShifts, setRequestedShifts] = useState([]);
  const currentUserShiftData = filterShiftData(aggShiftData, { date: currentUseDate, userId: userId, shiftTime: currentShiftTime });
  const [buttonTitle, setButtonTitle] = useState(null);

  const { colors } = useTheme();

  useEffect(() => {
    //TODO: Change shiftDataExample to aggShiftData after testing
    const filteredShiftData = filterShiftData(shiftDataExample, { date: currentUseDate, released: true, shiftTime: currentShiftTime });
    setFilteredData(filteredShiftData);
    const buttonTitle = (currentUserShiftData.length == 0) ? 'Pick up' : 'Swap';

    setButtonTitle(buttonTitle)
  }, [aggShiftData, currentUseDate, userId]);

  


  //consoleLogTest('currentUseDate:', parseDate(currentUseDate));

  if (filteredData === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    const isRequested = requestedShifts.includes(item.shiftAssignmentId);

    const handlePickupShift = (item) => {
      if (isRequested) {
        handleCancelRequest(item);
      } else {
        Alert.alert('Pick up Shift', 'Are you sure you want to pick up this shift?', [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Yes', onPress: () => {
              pickupShift(item);
              setRequestedShifts([...requestedShifts, item.shiftAssignmentId]);
            }
          },
        ]);
      }
    };
    const handleCancelRequest = (item) => {
      Alert.alert('Cancel Request', 'Are you sure you want to cancel the request?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => {
          cancelRequest(item);
          setRequestedShifts(requestedShifts.filter((id) => id !== item.shiftAssignmentId));
        }},
      ]);
    };
    const pickupShift = (item) => {
      // TODO: Implement the logic to pick up the shift
      console.log('Pick up shift:', item);
    };
  
    const cancelRequest = (item) => {
      // TODO: Implement the logic to cancel the request
      console.log('Cancel request:', item);
    };
    consoleLogTest('buttonTitle:', isRequested);

    return (
      <View style={styles.shiftItem}>
        <Text>{item.assignee ? 'Released' : 'Not released'}</Text>
        <Text>Section: {item.section}</Text>
        <ShiftPickupButton item={item} releasedShiftData={filteredData} buttonTitle={buttonTitle} isRequested={isRequested} handlePickupShift={handlePickupShift} pickupShift={pickupShift} cancelRequest={cancelRequest} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.shiftAssignmentId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',

    alignItems: 'center',
  },
  shiftItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  button: {
    paddingHorizontal: 0,
  },
});


export default ReleasedShifts;
