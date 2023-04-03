import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';
import shiftDataExample from '../../../assets/shiftDataExample.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ShiftPickupButton = ({ releasedShiftData, item, buttonTitle, isRequested, handlePickupShift, pickupShift, cancelRequest }) => {

    const { colors } = useTheme();

    useEffect(() => {
        // //TODO: Change shiftDataExample to aggShiftData after testing
        // const currentShiftData = filterShiftData(shiftDataExample, { date: currentUseDate, shiftTime: currentShiftTime });

        // setFilteredData(filteredShiftData);
    }, [releasedShiftData, buttonTitle, isRequested]);


    if ( buttonTitle === null) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.shiftItem}>
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
export default ShiftPickupButton;
