import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { useTheme, Card, Title, IconButton, List, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { consoleLogTest, filterShiftData } from '../../../utils/helper';
import { AppContext } from '../../../contexts/AppContext';

const DayTimeCard = ({ currentUseDate, shiftTime }) => {
    const { colors } = useTheme();
    const { width: screenWidth } = useWindowDimensions();

    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(currentUseDate));
    const dateNumber = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(new Date(currentUseDate));

    const icon = shiftTime === 'AM' ? 'weather-sunny' : 'weather-night';

    return (
        <View style={styles.container}>
            <Text style={styles.day}>
                {dayOfWeek}
            </Text>
            <View style={styles.iconContainer}>
              <Icon name={icon} size={24} color={colors.surface} style={styles.icon} />
            </View>
            <Text style={[styles.day, { marginTop: 10 }]}>
                {dateNumber}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    iconContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {

    },
    icon: {

    },
    day: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DayTimeCard;
