/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {RootStack} from './src/navigation/AppNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import {SdkButton} from 'testapp';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RootStack} />
        <Tab.Screen name="Profile" component={SdkButton} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
