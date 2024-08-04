import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const SearchScreen = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.Search}: background`}
      style={styles.background}>
      <Text style={styles.text}>Search</Text>
    </SafeAreaView>
  );
};
