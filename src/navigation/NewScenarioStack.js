//@flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddNameScreen from '../screens/AddNameScreen';
import ChooseThingsScreen from '../screens/ChooseThingsScreen';

const Stack = createStackNavigator();

const NewScenarioStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddName" component={AddNameScreen} />
      <Stack.Screen name="ChooseThings" component={ChooseThingsScreen} />
    </Stack.Navigator>
  );
};
export default NewScenarioStack;
