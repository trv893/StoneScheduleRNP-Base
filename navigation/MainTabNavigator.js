import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import DailyScreen from '../screens/DailyScreen/DailyScreen';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import WeeklyScreen from '../screens/WeeklyScreen/WeeklyScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Daily') {
                iconName = focused ? 'today' : 'today-outline';
              } else if (route.name === 'Weekly') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Schedule') {
                iconName = focused ? 'reader' : 'reader-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Daily" component={DailyScreen} />
          <Tab.Screen name="Weekly" component={WeeklyScreen} />
          <Tab.Screen name="Schedule" component={ScheduleScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      );
    };
