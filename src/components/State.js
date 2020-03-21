//@flow
import React from 'react';
import {View} from 'native-base';
import Strings from '../constants/Strings';
import {StyleSheet} from 'react-native';
import {Circle, Text} from 'react-native-svg';
import SharedStyles from '../constants/Styles';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

type StateProps = {
  stateNumber: number,
  isInitialState: boolean,
  x: number,
  y: number,
};
const State = ({stateNumber, isInitialState, x, y}: StateProps) => {
  return isInitialState ? (
    <Circle cx={x} cy={y} r="10" fill={Colors.gray} />
  ) : (
    <>
      <Circle
        cx={x}
        cy={y}
        r="20"
        fill={Colors.white}
        strokeWidth={3}
        stroke={Colors.gray}
      />
      <Text
        x={x}
        y={y + 5}
        fill={Colors.gray}
        fontFamily={Fonts.iransans}
        fontSize="20"
        fontWeight="bold"
        textAnchor="middle">
        {stateNumber}
      </Text>
    </>
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
