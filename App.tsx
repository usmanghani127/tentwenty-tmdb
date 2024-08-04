/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/stackNavigator.tsx';
import SplashScreen from 'react-native-splash-screen';
import {PaperProvider} from 'react-native-paper';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {api} from './src/services/api';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <NavigationContainer>
      <ApiProvider api={api}>
        <PaperProvider>
          <StackNavigator />
        </PaperProvider>
      </ApiProvider>
    </NavigationContainer>
  );
}

export default App;
