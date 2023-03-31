import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Card, Text, Badge, useTheme } from 'react-native-paper';
import { format } from '../../utils/helper';

const DayCard = ({ date, isFirst, isLast }) => {
  const { dayOfWeek, dayOfMonth } = format(date);
  const { width: screenWidth } = useWindowDimensions();
  const { colors } = useTheme();

  const borderStyle = {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.info,
    borderLeftWidth: isFirst ? 1 : 0,
    borderRightWidth: isLast ? 1 : 0,
    borderTopLeftRadius: isFirst ? 30 : 0,
    borderBottomLeftRadius: isFirst ? 30 : 0,
    borderTopRightRadius: isLast ? 30 : 0,
    borderBottomRightRadius: isLast ? 30 : 0,
  };
  const vw = screenWidth / 100;
  return (
    <Card style={{justifyContent: 'center', alignItems: 'center', ...borderStyle, flexBasis: `${100 / 9}%`, height:70, backgroundColor: colors.surface }}>
      <Card.Content style={{ justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0, paddingHorizontal: 4, }}>
      <Text style={{ fontSize: vw * 3.5, margin: 0, padding: 0, fontWeight: 'bold', color: colors.text }}>
          {`${dayOfWeek}`}
        </Text>
        <Text style={{ fontSize: vw * 2.5, margin: 0, padding: 0, color: colors.secondaryText }}>
          {`${dayOfMonth}`}
        </Text>
        <Badge size={vw * 1} style={{marginLeft: "auto", marginRight: "auto", marginTop: 4}}/>
      </Card.Content>
    </Card>
  );
};

export default DayCard;
