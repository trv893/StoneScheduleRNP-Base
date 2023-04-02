import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { useTheme, Card, Title, IconButton, List, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';

const ShiftTradeModal = ({ currentUseDate }) => {

    const { aggShiftData, userId } = useContext(AppContext);
    const [filteredData, setFilteredData] = useState(null);
    const { width: screenWidth } = useWindowDimensions();
    const maxContainerWidth = screenWidth;
    const { colors } = useTheme();
  
    useEffect(() => {
      const filteredShiftData = filterShiftData(aggShiftData, { date: currentUseDate, userId: userId,  });
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

export default ShiftTradeModal;
