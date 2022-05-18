import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#7D40E7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }} >
        <Stack.Screen options={{ title: 'DevRadar' }} name="Main" component={Main} />
        <Stack.Screen options={{ title: 'Perfil no GutHub' }} name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default Routes;