import React from 'react';

import * as Styled from './button.styles';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    onClick,
}) => (
    <Styled.Button onClick={onClick}>{children}</Styled.Button>
);

export default Button;
