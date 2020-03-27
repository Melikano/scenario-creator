//@flow
import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Simulator from '../utils/Simulator';

const ScenarioCreatedScreen = () => {
  const fsm = useSelector(state => state.fsm);
  const things = useSelector(state => state.things);
  const initialValues = new Map();
  things
    .filter(thing => thing.type === 'sensor')
    .forEach((element, i) => {
      initialValues.set(element.id, i);
    });
  console.log(initialValues);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>FSM:');
  console.log(fsm);
  const {path, sensorsData, actuatorsValues} = Simulator(
    fsm,
    things,
    initialValues,
    new Map(),
    20,
  );
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>FINAL RESULTS');
  console.log(path);
  console.log(sensorsData);
  console.log(actuatorsValues);
  return (
    <View>
      <Text>salaaaaaam</Text>
    </View>
  );
};
export default ScenarioCreatedScreen;
