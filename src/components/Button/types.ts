import {TextStyle, ViewStyle} from 'react-native';
import {FC} from 'react';

export type ButtonType = {
  label: string;
  onPress: () => void;
  Left?: FC;
  Right?: FC;
  styles?: ViewStyle;
  textStyles?: TextStyle;
  kind: 'filled' | 'outlined';
};
