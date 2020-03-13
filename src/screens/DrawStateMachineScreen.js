//@flow
import React from 'react';
import {View} from 'native-base';
import State from '../components/State';
import AddStateOrTransButton from '../components/AddStateOrTransButton';
const DrawStateMachineScreen = () => {
  return (
    <View>
      <AddStateOrTransButton />
    </View>
  );
};
export default DrawStateMachineScreen;
