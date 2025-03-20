import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import EsqueceuSenhaScreen from './screens/EsqueceuSenhaScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenhaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
