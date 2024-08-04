import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const MediaLibraryScreen = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.MediaLibrary}: background`}
      style={styles.background}>
      <Text style={styles.text}>Media Library</Text>
    </SafeAreaView>
  );
};
