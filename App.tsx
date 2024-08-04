/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator.tsx';
import SplashScreen from 'react-native-splash-screen';
import {PaperProvider} from 'react-native-paper';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {api} from './src/services/api';
import {ThemeProvider} from 'styled-components';
import {Colors, Fonts} from './src/common/theme';
import {useScreenDimensions} from './src/common/hooks/useScreenDimensions.ts';

function App(): React.JSX.Element {
  const dimensions = useScreenDimensions();

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  const theme = {
    colors: Colors,
    fonts: Fonts,
    dimensions,
  };

  return (
    <NavigationContainer>
      <ApiProvider api={api}>
        <ThemeProvider theme={theme}>
          <PaperProvider>
            <StackNavigator />
          </PaperProvider>
        </ThemeProvider>
      </ApiProvider>
    </NavigationContainer>
  );
}

export default App;
