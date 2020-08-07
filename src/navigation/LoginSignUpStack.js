//@flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../constants/Screens';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

//$FlowFixMe
const LoginSignUpStack = ({user}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Screens.login}
        component={Login}
        initialParams={{user}}
      />
      <Stack.Screen name={Screens.signUp} component={SignUp} />
    </Stack.Navigator>
  );
};
export default LoginSignUpStack;
