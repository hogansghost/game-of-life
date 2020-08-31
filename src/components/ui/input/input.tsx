import React from 'react';

import * as Styled from './input.styles';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...otherProps
}) => (
  <Styled.Input
    {...otherProps}
  />
);

export default Input;
