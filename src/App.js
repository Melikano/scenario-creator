/**
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import scenarioCreator from './Redux/reducers/ScenarioReducer';
import {NavigationContainer} from '@react-navigation/native';
import LoginSignUpStack from './navigation/LoginSignUpStack';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from './constants/Screens';
import MainTab from './navigation/MainTab';
import {getSingleData} from './utils/localStorageUtils';
import Splash from './screens/SplashScreen';

const store = createStore(scenarioCreator);
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    function hideSplash() {
      setTimeout(() => setShowSplash(false), 3000);
    }
    async function fetchUser() {
      const fetcheduser = await getSingleData('user');
      setUser(fetchUser);
      setLoggedIn(fetcheduser !== undefined && fetcheduser !== null);
    }

    fetchUser();
    hideSplash();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {showSplash && (
            <Stack.Screen name={Screens.splash} component={Splash} />
          )}
          {!loggedIn && (
            <Stack.Screen
              name={Screens.loginSignUp}
              component={LoginSignUpStack}
              initialParams={{user}}
            />
          )}

          <Stack.Screen name={Screens.mainTab} component={MainTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
