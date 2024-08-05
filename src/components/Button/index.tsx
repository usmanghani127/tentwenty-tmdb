import React from 'react';
import {Container, Label} from './styles';
import {ButtonType} from './types.ts';

export const Button = (props: ButtonType) => {
  const {
    kind = 'filled',
    label = '',
    onPress = () => {},
    Left = () => <></>,
    Right = () => <></>,
    styles,
    textStyles,
  } = props;

  return (
    <Container kind={kind} onPress={onPress} {...styles}>
      <Right />
      <Label {...textStyles}>{label}</Label>
      <Left />
    </Container>
  );
};
