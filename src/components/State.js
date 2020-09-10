//@flow
import React, {useState} from 'react';
import {Circle, Text} from 'react-native-svg';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import type {stateType} from '../constants/Types';
type StateProps = {
  onStatePress: Function,
  state: stateType,
};
const State = ({state, onStatePress}: StateProps) => {
  const {x, y, stateNumber} = state;
  return (
    <>
      <Circle
        cx={x}
        cy={y}
        r="20"
        fill={Colors.white}
        strokeWidth={3}
        stroke={Colors.gray}
        onPress={onStatePress}
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
