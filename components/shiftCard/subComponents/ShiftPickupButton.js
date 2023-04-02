import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';
import shiftDataExample from '../../../assets/shiftDataExample.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ShiftPickupButton = ({ shiftData, item }) => {

    const currentUserShiftData = filterShiftData(aggShiftData, { date: currentUseDate, userId: userId, shiftTime: currentShiftTime });
    consoleLogTest('currentUserShiftData:', parseDate(currentUserShiftData));
    const buttonTitle = (currentUserShiftData.length = 0) ? 'Swap' : 'Pick up';
    const isRequested = requestedShifts.includes(item.shiftAssignmentId);
    consoleLogTest('currentUserShiftData:', currentUserShiftData);

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

    return (
        <View style={styles.shiftItem}>
            <Text>{item.assignee ? 'Released' : 'Not released'}</Text>
            <Text>Section: {item.section}</Text>
            <Button
                mode="contained"
                onPress={() => handlePickupShift(item)}
                style={[styles.button, { justifyContent: 'center', paddingHorizontal: 8 }]}
                buttonColor={isRequested ? colors.success : colors.primary}
                labelStyle={{ marginRight: isRequested ? 0 : 8 }}
                contentStyle={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
                {isRequested ? 'Pending' : buttonTitle}
                {isRequested && <MaterialCommunityIcons name="close" size={24} color="red" style={{ marginLeft: 8 }} />}
            </Button>
        </View>
    );
};
export default ShiftPickupButton;
