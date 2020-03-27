//@flow
import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ScenarioCreatedScreen = () => {
  const fsm = useSelector(state => state.fsm);
  console.log(fsm);
  return (
    <View>
      <Text>salaaaaaam</Text>
    </View>
  );
};
export default ScenarioCreatedScreen;
