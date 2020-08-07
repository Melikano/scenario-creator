/**
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewScenarioStack from '../navigation/NewScenarioStack';
import Profile from '../screens/Profile';
import BottomTabBar from '../navigation/BottomTabBar';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="NewScenario"
        component={NewScenarioStack}
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
  );
};

export default MainTab;
