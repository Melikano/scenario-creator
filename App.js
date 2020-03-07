/**
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import scenarioCreator from './src/Redux/reducers/ScenarioReducer';
import {Icon} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewScenarioStack from './src/navigation/NewScenarioStack';
import Profile from './src/screens/Profile';
import BottomTabBar from './src/navigation/BottomTabBar';

const store = createStore(scenarioCreator);
const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <NavigationContainer>
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
      </NavigationContainer>
    </Provider>
  );
};

export default App;
