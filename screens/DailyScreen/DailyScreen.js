import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions, Modal, TouchableOpacity} from 'react-native';
import {useTheme, Card, Title, IconButton, List, Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DailyScreen = () => {
  const [currentStartDate, setCurrentStartDate] = useState(new Date());
  const {width: screenWidth} = useWindowDimensions();
  const maxContainerWidth = screenWidth * 0.9;
  const {colors} = useTheme();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedShift, setSelectedShift] = useState('day');

  const toggleModal = (shift) => {
    setSelectedShift(shift);
    setModalVisible(!modalVisible);
  };

  const handleEmployeeSelection = (employee) => {
    console.log('Employee Selected:', employee);
    setModalVisible(false);
  };

  // Shift data
  const shiftData = {
    day: {
      section: '1',
      employees: ['1', '2', '3'],
      total: 3,
      servers: 1,
      bartenders: 1,
      patioServers: 1,
      pendingSwaps: ['1', '2', '3'],
    },
    night: {
      section: '1',
      employees: ['1', '2', '3'],
      total: 3,
      servers: 1,
      bartenders: 1,
      patioServers: 1,
      pendingSwaps: ['1', '2', '3'],
    },
  };

  const handlePickup = () => {
    console.log('Pickup');
  };

  const handlePickupNight = () => {
    console.log('Pickup Night');
  };

  // Implement logic for shift sections, employees dropdown, people count, and pending swaps here

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Select Employee</Text>
          {shiftData[selectedShift].employees.map((employee, index) => (
            <TouchableOpacity key={index} onPress={() => handleEmployeeSelection(employee)}>
              <Text style={styles.modalItem}>{employee}</Text>
            </TouchableOpacity>
          ))}
          <Button onPress={() => setModalVisible(false)}>Close</Button>
        </View>
      </Modal>
      {/* Day shift card */}
      <ShiftCard
        title="Day Shift"
        iconName="weather-sunny"
        shiftData={shiftData.day}
        onEmployeePress={() => toggleModal('day')}
        onPickupPress={handlePickup}
      />
      {/* Night shift card */}
      <ShiftCard
        title="Night Shift"
        iconName="weather-night"
        shiftData={shiftData.night}
        onEmployeePress={() => toggleModal('night')}
        onPickupPress={handlePickupNight}
      />
    </View>
  );
};

const ShiftCard = ({title, iconName, shiftData, onEmployeePress, onPickupPress}) => {
  const {colors} = useTheme();
  return (
    <Card style={[styles.card, {backgroundColor: iconName === 'weather-sunny' ? colors.primary : colors.accent}]}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <MaterialCommunityIcons 
          name={iconName} size={24} color={colors.text} />
          <Title>{title}</Title>
        </View>
        {/* Shift Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shift Section:</Text>
          <Text>{shiftData.section || 'Not Scheduled'}</Text>
        </View>

        {/* Employees */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Employees:</Text>
          <Button onPress={onEmployeePress}>Select Employee</Button>
          <Button onPress={onPickupPress}>Pickup</Button>
        </View>

        {/* People Count */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>People Count:</Text>
          <Text>Total: {shiftData.total}</Text>
          <Text>Servers: {shiftData.servers}</Text>
          <Text>Bartenders: {shiftData.bartenders}</Text>
          <Text>Patio Servers: {shiftData.patioServers}</Text>
        </View>

        {/* Pending Swaps */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Swaps:</Text>
          <List.Section>
            {shiftData.pendingSwaps.map((swap, index) => (
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
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
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '50%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DailyScreen;
