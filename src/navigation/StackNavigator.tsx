//@ts-nocheck
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteKeys} from './routes.ts';
import {StackNavigatorProps} from './types.ts';
import {Colors} from '../common/theme';

const Stack = createNativeStackNavigator<StackNavigatorProps>();

// The purpose is to demonstrate the usage of Stack Navigator
// for the flows like Landing Scree, Sign In, Sign Up, Forgot Password, etc.
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteKeys.Home}
      screenOptions={{
        headerShown: false,
        navigationBarColor: Colors.primary,
        statusBarColor: Colors.white,
        statusBarStyle: 'dark',
      }}>
      <Stack.Screen name={'Landing'} component={() => {}} />
      <Stack.Screen name={'Sign In'} component={() => {}} />
    </Stack.Navigator>
  );
};
