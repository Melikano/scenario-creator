//@flow
import React from 'react';
import {Path} from 'react-native-svg';
import Colors from '../constants/Colors';

type TransitionProps = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  hasReverse: boolean,
  onTranPress: Function,
};
const Transition = ({
  x1,
  y1,
  x2,
  y2,
  hasReverse,
  onTranPress,
}: TransitionProps) => {
  const offset = Math.abs(x1 - x2);
  const r = hasReverse ? 3 : -3;
  console.log(x1);
  console.log(x2);
  return (
    <Path
      d={`M${x1} ${y1} C${x1 + offset / r} ${y1 - offset / r} ${x2 -
        offset / r} ${y2 - offset / r} ${x2} ${y2}`}
      stroke={Colors.gray}
      strokeWidth={2}
      onPress={onTranPress}
    />
  );
};
export default Transition;
