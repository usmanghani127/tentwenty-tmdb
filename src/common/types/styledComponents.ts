import {ScaledSize} from 'react-native';
import {Colors, Fonts} from '../theme';

export type StyledComponentsThemeType = {
  dimensions: ScaledSize & {
    smallerDimension: number;
    largerDimension: number;
    isLandScape: boolean;
    pixelDensity: number;
    navBarHeight: number;
  };
  colors: typeof Colors;
  fonts: typeof Fonts;
};

declare module 'styled-components' {
  interface DefaultTheme extends StyledComponentsThemeType {}
}
