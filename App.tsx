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
import {ThemeProvider} from 'styled-components';
import {Colors, Fonts} from './src/common/theme';
import {useScreenDimensions} from './src/common/hooks/useScreenDimensions.ts';
import {Provider} from 'react-redux';
import store from './src/services/store';

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PaperProvider>
            <StackNavigator />
          </PaperProvider>
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
