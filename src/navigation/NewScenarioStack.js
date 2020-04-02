//@flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddNameScreen from '../screens/AddNameScreen';
import ChooseThingsScreen from '../screens/ChooseThingsScreen';
import DrawStateMachineScreen from '../screens/DrawStateMachineScreen';
import ScenarioCreatedScreen from '../screens/ScenarioCreatedScreen';
import Screens from '../constants/Screens';
import InitSimulationScreen from '../screens/InitSimulationScreen';
import SimulationStartScreen from '../screens/SimulationStartScreen';

const Stack = createStackNavigator();

const NewScenarioStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.addName} component={AddNameScreen} />
      <Stack.Screen
        name={Screens.chooseThings}
        component={ChooseThingsScreen}
      />
      <Stack.Screen
        name={Screens.drawStateMachine}
        component={DrawStateMachineScreen}
      />

      <Stack.Screen
        name={Screens.scenarioCreated}
        component={ScenarioCreatedScreen}
      />
      <Stack.Screen name={Screens.initSim} component={InitSimulationScreen} />
      <Stack.Screen name={Screens.startSim} component={SimulationStartScreen} />
    </Stack.Navigator>
  );
};
export default NewScenarioStack;
