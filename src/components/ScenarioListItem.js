//@flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {scenarioType} from '../constants/Types';
import SimulationButton from '../sharedComponents/SimulationButton';
import Colors from '../constants/Colors';
import SharedStyles from '../constants/Styles';
import Fonts from '../constants/Fonts';
import SharedButton from '../sharedComponents/SharedButton';
import Strings from '../constants/Strings';
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
        <Text style={[SharedStyles.sharedTextStyle, styles.descText]}>
          {scenario.description}
        </Text>
        <View style={styles.buttonContainer}>
          <SimulationButton
            scenario={scenario}
            navigation={navigation}
            style={styles.button}
          />
          <SharedButton
            style={styles.editButton}
            title={Strings.edit}
            onPress={() => {}}
          />
        </View>
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
    backgroundColor: Colors.white,
  },
  nameDate: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
    backgroundColor: Colors.white,
  },
  descText: {
    textAlign: 'right',
    width: '60%',
    marginLeft: 20,
    fontSize: 11,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  button: {
    height: 30,
  },
  editButton: {
    height: 30,
    backgroundColor: Colors.blueButton,
    marginTop: 10,
  },
});
export default ScenarioListItem;
