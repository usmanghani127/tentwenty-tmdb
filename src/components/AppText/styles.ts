import {Text} from 'react-native';
import styled, {DefaultTheme} from 'styled-components';

export const StyledText = styled(Text)(({theme}: {theme: DefaultTheme}) => ({
  fontFamily: theme.fonts.family.regular,
  fontSize: theme.fonts.size.normal,
  color: theme.colors.black,
}));
