//@flow
import React, {useState} from 'react';
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
  const [reset, setReset] = useState(false);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Screens.addName}
        component={AddNameScreen}
        initialParams={{reset}}
      />
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
        initialParams={{onSaveScenario: () => setReset(true)}}
      />
      <Stack.Screen name={Screens.initSim} component={InitSimulationScreen} />
      <Stack.Screen name={Screens.startSim} component={SimulationStartScreen} />
    </Stack.Navigator>
  );
};
export default NewScenarioStack;
