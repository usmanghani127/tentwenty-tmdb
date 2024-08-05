import React, {PropsWithChildren} from 'react';
import {Container} from './styles.ts';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

export const ScreenContainer = ({
  children,
}: PropsWithChildren<SafeAreaViewProps>) => <Container>{children}</Container>;
