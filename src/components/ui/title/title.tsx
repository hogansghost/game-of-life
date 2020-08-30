import React from 'react';

import * as Styled from './title.styles';
import { TitleProps } from './title.interface';

const Title: React.FC<TitleProps> = ({
    children,
}) => (
    <Styled.Title>{children}</Styled.Title>
);

export default Title;
