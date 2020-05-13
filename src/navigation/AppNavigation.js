import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ViewC from '../view/ViewC';
import ViewD from '../view/ViewD';
// authentication views

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="Home" component={ViewC} options={{title: 'My app'}} />
      <Stack.Screen
        name="Profile"
        component={ViewD}
        initialParams={{user: 'me'}}
      />
    </Stack.Navigator>
  );
}
