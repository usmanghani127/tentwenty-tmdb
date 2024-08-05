import {Pressable, Text} from 'react-native';
import styled, {DefaultTheme} from 'styled-components';
import {ButtonType} from './types.ts';

export const Container = styled(Pressable)<{
  theme: DefaultTheme;
  kind: ButtonType['kind'];
}>(({theme, kind}) => ({
  flexDirection: 'row',
  backgroundColor:
    kind === 'filled' ? theme.colors.skyBlue : theme.colors.transparent,
  borderColor: theme.colors.skyBlue,
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 15,
  paddingHorizontal: theme.dimensions.isLandScape ? '10%' : '20%',
  margin: 5,
}));

export const Label = styled(Text)<{
  theme: DefaultTheme;
}>(({theme}) => ({
  color: theme.colors.white,
  fontFamily: theme.fonts.family.semiBold,
}));
