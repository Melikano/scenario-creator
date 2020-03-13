//@flow
import React from 'react';
import {View, Text} from 'native-base';
import Strings from '../constants/Strings';
import {StyleSheet} from 'react-native';
import SharedStyles from '../constants/Styles';
import Colors from '../constants/Colors';

type StateProps = {
  stateNumber?: number,
  isInitialState: boolean,
};
const State = ({stateNumber, isInitialState}: StateProps) => {
  return (
    <View style={styles.state}>
      {stateNumber && (
        <Text style={SharedStyles.sharedTextStyle}>
          {Strings.state(stateNumber)}
        </Text>
      )}
    </View>
  );
};
export default State;

const styles = StyleSheet.create({
  state: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.gray,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
