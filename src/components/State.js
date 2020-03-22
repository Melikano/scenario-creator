//@flow
import React from 'react';
import {Circle, Text} from 'react-native-svg';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

type StateProps = {
  stateNumber: number,
  x: number,
  y: number,
};
const State = ({stateNumber, x, y}: StateProps) => {
  return (
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
