import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';
import shiftDataExample from '../../../assets/shiftDataExample.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShiftPickupButton from './ShiftPickupButton';

const ShiftStatsTable = ({ shiftData, serversCount, bartenderCount, patioServerCount, foodRunnerCount, onCallNames }) => {

//   const { aggShiftData, userId } = useContext(AppContext);
//   const [filteredData, setFilteredData] = useState(null);

  const [serversCount, setServersCount] = useState(null);
  const [bartenderCount, setBartenderCount] = useState(null);
  const [patioServerCount, setPatioServerCount] = useState(null);
  const [foodRunnerCount, setFoodRunnerCount] = useState(null);
  const [onCallNames, setOnCallNames] = useState(null);

  const { colors } = useTheme();

  useEffect(() => {
    const serversCount = filterShiftData(shiftData, { section: currentUseDate, shiftTime: shiftTime });
    setFilteredData(filteredShiftData);
  }, [shiftData, serversCount, bartenderCount, patioServerCount, foodRunnerCount, onCallNames]);

  
    //consoleLogTest('filteredShiftData data:', filteredData);
  
    if (serversCount===null) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
        <View style={styles.container}>
          <View style={styles.item}>
            <Text style={styles.label}>Servers:</Text>
            <Text style={styles.value}>{serversCount}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Bartenders:</Text>
            <Text style={styles.value}>{bartenderCount}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Patio Servers:</Text>
            <Text style={styles.value}>{patioServerCount}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Food Runners:</Text>
            <Text style={styles.value}>{foodRunnerCount}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>On Call:</Text>
            <Text style={styles.value}>{onCallNames}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Covers:</Text>
            <Text style={styles.value}>Coming Soon!</Text>
          </View>
        </View>
      );
      
};

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 'auto',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    item: {
      width: '30%',
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    value: {
      fontSize: 16,
    },
  });
  

export default ShiftStatsTable;
