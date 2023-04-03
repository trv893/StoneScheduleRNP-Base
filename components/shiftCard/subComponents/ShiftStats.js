import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';
import shiftDataExample from '../../../assets/shiftDataExample.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShiftPickupButton from './ShiftPickupButton';
import ShiftStatsTable from './ShiftStatsTable';

const ShiftStats = ({ currentUseDate, shiftTime }) => {

  const { aggShiftData, userId } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState(null);

  const [serversCount, setServersCount] = useState(null);
  const [bartenderCount, setBartenderCount] = useState(null);
  const [patioServerCount, setPatioServerCount] = useState(null);
  const [foodRunnerCount, setFoodRunnerCount] = useState(null);
  const [onCallNames, setOnCallNames] = useState(null);

  const { colors } = useTheme();

  useEffect(() => {
    //TODO: Change shiftDataExample to aggShiftData after testing
    const filteredShiftData = filterShiftData(aggShiftData, { date: currentUseDate, shiftTime: shiftTime });
    setFilteredData(filteredShiftData);
  }, [aggShiftData, currentUseDate, userId]);

  
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
          <Text>Shift Stats</Text>
          <ShiftStatsTable
            shiftData={filteredData} 
            serversCount={serversCount} 
            bartenderCount={bartenderCount}
            patioServerCount={patioServerCount}
            foodRunnerCount={foodRunnerCount}
            onCallNames={onCallNames}/>
          <Text>Servers: </Text>
          <Text>Bartenders: </Text>
          <Text>Patio Servers: </Text>
          <Text>Food Runners: </Text>
          <Text>On Call: </Text>
          <Text>Covers: Coming Soon!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        alignItems: 'center',
    },
});

export default ShiftStats;
