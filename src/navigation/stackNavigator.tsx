import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteKeys} from './routes.ts';
import {HomeScreen} from '../screens';
import {StackNavigatorProps} from './types.ts';
import {Colors} from '../common/theme/colors.ts';

const Stack = createNativeStackNavigator<StackNavigatorProps>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteKeys.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RouteKeys.HOME}
        component={HomeScreen}
        options={{
          statusBarColor: Colors.primary,
          statusBarStyle: 'light',
          navigationBarColor: Colors.primary,
        }}
      />
    </Stack.Navigator>
  );
};
