/**
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Icon} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewScenario from './src/screens/NewScenario';
import Profile from './src/screens/Profile';
import BottomTabBar from './src/navigation/BottomTabBar';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen
          name="NewScenario"
          component={NewScenario}
          options={{
            tabBarLabel: 'سناریو جدید',
            tabBarIcon: ({color, size}) => (
              <Icon name="add" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'سناریوهای من',
            tabBarIcon: ({color, size}) => (
              <Icon type="AntDesign" name="fork" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
