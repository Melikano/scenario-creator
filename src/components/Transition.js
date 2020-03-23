//@flow
import React from 'react';
import {Path} from 'react-native-svg';
import Colors from '../constants/Colors';

type TransitionProps = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
};
const Transition = ({x1, y1, x2, y2}: TransitionProps) => {
  const offset = Math.abs(x1 - x2);
  return (
    <Path
      d={`M${x1} ${y1} C${x1 + offset / 2} ${y1 - offset / 3} ${x2 -
        offset / 2} ${y2 - offset / 3} ${x2} ${y2}`}
      stroke={Colors.gray}
      strokeWidth={2}
    />
  );
};
export default Transition;
