//@flow
import React from 'react';
import SharedButton from './SharedButton';
import Screens from '../constants/Screens';
type SimulationButtonProps = {
  navigation: Object,
  scenario: Object,
  style?: Object,
};
const SimulationButton = ({
  navigation,
  scenario,
  style,
}: SimulationButtonProps) => (
  <SharedButton
    buttonType="SIM"
    style={style}
    onPress={() => {
      navigation.navigate(Screens.initSim, {scenario});
    }}
  />
);
export default SimulationButton;
