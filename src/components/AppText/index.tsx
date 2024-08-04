import React, {PropsWithChildren} from 'react';
import {TextProps} from 'react-native';
import {StyledText} from './styles';

export const AppText = (props: PropsWithChildren<TextProps>) => {
  const {children, ...restProps} = props;

  return (
    <StyledText allowFontScaling={false} {...restProps}>
      {children}
    </StyledText>
  );
};
