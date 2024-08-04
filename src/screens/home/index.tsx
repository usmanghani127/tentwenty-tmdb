import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';
import {VectorIcon} from '../../components';

export const HomeScreen = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.HOME}: background`}
      style={styles.background}>
      <Text style={styles.text}>Hello World</Text>
      <VectorIcon
        name={'account-search'}
        type={'MaterialCommunityIcons'}
        color={'white'}
        size={50}
      />
    </SafeAreaView>
  );
};
