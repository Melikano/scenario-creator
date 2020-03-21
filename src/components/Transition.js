//@flow
import React from 'react';
import {Svg, Path, ClipPath} from 'react-native-svg';
import Colors from '../constants/Colors';

type TransitionProps = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
};
const Transition = ({x1, y1, x2, y2}: TransitionProps) => {
  return (
    <Path
      d={`M${x1} ${y1} L${x2} ${y2}`}
      stroke={Colors.gray}
      strokeWidth={2}
    />
  );
};
export default Transition;
