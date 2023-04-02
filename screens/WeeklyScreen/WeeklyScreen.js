import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import WeekSelector from '../../components/WeekSelector/WeekSelector';
import { SmallCircleButton, MediumCircleButton, SmallPillButton, MediumPillButton } from '../../utils/buttonFunctions';

const WeeklyScreen = () => {
  const onSmallCirclePress = () => {
    console.log('Small circle button pressed');
  };

  const onMediumCirclePress = () => {
    console.log('Medium circle button pressed');
  };

  const onSmallPillPress = () => {
    console.log('Small pill button pressed');
  };

  const onMediumPillPress = () => {
    console.log('Medium pill button pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SmallCircleButton onPress={onSmallCirclePress} />
      <MediumCircleButton onPress={onMediumCirclePress} />
      <SmallPillButton onPress={onSmallPillPress} />
      <MediumPillButton onPress={onMediumPillPress} />
    </View>
  );
};

export default WeeklyScreen;





// import React, { useState } from 'react';
// import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
// import { useTheme } from 'react-native-paper';
// import WeekSelector from '../../components/WeekSelector/WeekSelector';

// const WeeklyScreen = () => {
//   const [currentStartDate, setCurrentStartDate] = useState(new Date());
//   const { width: screenWidth } = useWindowDimensions();
//   const maxContainerWidth = screenWidth;

//   const { colors } = useTheme();

//   const handleStartDateChange = (newStartDate) => {
//     setCurrentStartDate(newStartDate);
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background, maxWidth: maxContainerWidth }]}>
//       <WeekSelector onStartDateChange={handleStartDateChange} />
//       {/* Other components */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default WeeklyScreen;
