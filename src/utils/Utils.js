//@flow
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const computeNexStateCoordinates = (
  currentX: number,
  currentY: number,
) => {
  const endWidthReached = currentX > width - 130;
  const endHeightReached = currentY > height - 300;
  const x = endWidthReached ? 35 : currentX + 100;
  const y = endWidthReached
    ? endHeightReached
      ? 0
      : currentY + 100
    : currentY;
  return {x, y};
};
