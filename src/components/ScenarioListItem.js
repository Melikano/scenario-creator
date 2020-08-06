//@flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {scenarioType} from '../constants/Types';
import SimulationButton from '../sharedComponents/SimulationButton';
import Colors from '../constants/Colors';
import SharedStyles from '../constants/Styles';
import Fonts from '../constants/Fonts';
type ScenarioListItemProps = {
  scenario: scenarioType,
  navigation: Object,
};
const ScenarioListItem = ({scenario, navigation}: ScenarioListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameDate}>
        <Text
          style={{
            ...SharedStyles.sharedTextStyle,
            fontFamily: Fonts.iransansBold,
          }}>
          {scenario.name}
        </Text>
        <Text style={SharedStyles.sharedTextStyle}>{scenario.dateCreated}</Text>
      </View>
      <View style={styles.nameDate}>
        <Text style={SharedStyles.sharedTextStyle}>{scenario.description}</Text>
        <SimulationButton
          scenario={scenario}
          navigation={navigation}
          style={styles.button}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 15,
    paddingTop: 15,
  },
  nameDate: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    height: null,
    width: 90,
  },
});
export default ScenarioListItem;
