import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, } from 'react-native';
import { useTheme, Card, Title, Paragraph, IconButton, List, Button, Picker } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const DailyScreen = (shiftData) => {
  const [currentStartDate, setCurrentStartDate] = useState(new Date());
  const { width: screenWidth } = useWindowDimensions();
  const maxContainerWidth = screenWidth * 0.9;
  const { colors } = useTheme();

  var dayShiftSection = '1';
  var dayShiftEmployees = ["1", "2", "3"];
  var dayShiftTotal = 3;
  const handlePickup = () => {
    console.log("Pickup");
  }
  var dayShiftEmployees = ["1", "2", "3"];
  var dayShiftTotal = 3;
  var dayShiftServers = 1;
  var dayShiftBartenders = 1;
  var dayShiftPatioServers = 1;
  var dayShiftPendingSwaps = ["1", "2", "3"];
  var nightShiftSection = '1';
  var nightShiftEmployees = ["1", "2", "3"];
  var nightShiftTotal = 3;
  var nightShiftServers = 1;
  var nightShiftBartenders = 1;
  var nightShiftPatioServers = 1;
  var nightShiftPendingSwaps = ["1", "2", "3"];
  const handlePickupNight = () => {
    console.log("Pickup Night");
  }
  const handleEmployeeSelection = (value, index, data) => {
    console.log("Employee Selected");
  }
  const handleEmployeeSelectionNight = (value, index, data) => {
    console.log("Employee Selected Night");
  }


  // Implement logic for shift sections, employees dropdown, people count, and pending swaps here

  return (
    <View style={styles.container}>
      <Card style={[styles.card, { backgroundColor: colors.primary }]}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="weather-sunny" size={24} color={colors.text} />
            <Title>Day Shift</Title>
          </View>
          {/* Shift Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shift Section:</Text>
            <Text>{dayShiftSection || 'Not Scheduled'}</Text>
          </View>

          {/* Employees Dropdown */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Employees:</Text>
            <Picker
              style={{ width: '100%' }}
              onValueChange={(itemValue, itemIndex) => handleEmployeeSelection(itemValue, itemIndex, dayShiftEmployees)}
            >
              {dayShiftEmployees.map((employee, index) => (
                <Picker.Item key={index} label={employee} value={employee} />
              ))}
            </Picker>
            <Button onPress={handlePickup}>Pickup</Button>
          </View>

          {/* People Count */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>People Count:</Text>
            <Text>Total: {dayShiftTotal}</Text>
            <Text>Servers: {dayShiftServers}</Text>
            <Text>Bartenders: {dayShiftBartenders}</Text>
            <Text>Patio Servers: {dayShiftPatioServers}</Text>
          </View>

          {/* Pending Swaps */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pending Swaps:</Text>
            <List.Section>
              {dayShiftPendingSwaps.map((swap, index) => (
                <List.Item
                  key={index}
                  title={`${swap.fromEmployee} -> ${swap.toEmployee}`}
                  description={swap.details}
                  right={() => (
                    <View style={styles.swapButtons}>
                      <IconButton
                        icon="check"
                        size={20}
                        onPress={() => handleSwapAccept(index)}
                      />
                      <IconButton
                        icon="close"
                        size={20}
                        onPress={() => handleSwapReject(index)}
                      />
                    </View>
                  )}
                />
              ))}
            </List.Section>
          </View>
        </Card.Content>
      </Card>
      <Card style={[styles.card, { backgroundColor: colors.accent }]}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="weather-night" size={24} color={colors.text} />
            <Title>Night Shift</Title>
          </View>
          {/* Shift Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shift Section:</Text>
            <Text>{nightShiftSection || 'Not Scheduled'}</Text>
          </View>

          {/* Employees Dropdown */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Employees:</Text>
            <Picker
              style={{ width: '100%' }}
              onValueChange={(itemValue) => handleEmployeeSelection(itemValue, 'night')}
            >
              {nightShiftEmployees.map((employee, index) => (
                <Picker.Item key={index} label={employee} value={employee} />
              ))}
            </Picker>
            <Button onPress={handlePickupNight}>Pickup</Button>
          </View>

          {/* People Count */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>People Count:</Text>
            <Text>Total: {nightShiftTotal}</Text>
            <Text>Servers: {nightShiftServers}</Text>
            <Text>Bartenders: {nightShiftBartenders}</Text>
            <Text>Patio Servers: {nightShiftPatioServers}</Text>
          </View>

          {/* Pending Swaps */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pending Swaps:</Text>
            <List.Section>
              {nightShiftPendingSwaps.map((swap, index) => (
                <List.Item
                  key={index}
                  title={`${swap.fromEmployee} -> ${swap.toEmployee}`}
                  description={swap.details}
                  right={() => (
                    <View style={styles.swapButtons}>
                      <IconButton
                        icon="check"
                        size={20}
                        onPress={() => handleSwapAccept(index, 'night')}
                      />
                      <IconButton
                        icon="close"
                        size={20}
                        onPress={() => handleSwapReject(index, 'night')}
                      />
                    </View>
                  )}
                />
              ))}
            </List.Section>
          </View>

        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  swapButtons: {
    flexDirection: 'row',
  },
});

export default DailyScreen;
