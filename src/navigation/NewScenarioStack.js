//@flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddNameScreen from '../screens/AddNameScreen';
import ChooseThingsScreen from '../screens/ChooseThingsScreen';
import DrawStateMachineScreen from '../screens/DrawStateMachineScreen';
import Screens from '../constants/Screens';

const Stack = createStackNavigator();

const NewScenarioStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.addName} component={AddNameScreen} />
      <Stack.Screen
        name={Screens.chooseThings}
        component={ChooseThingsScreen}
      />
      <Stack.Screen
        name={Screens.drawStateMachine}
        component={DrawStateMachineScreen}
      />
    </Stack.Navigator>
  );
};
export default NewScenarioStack;
