import React, { FunctionComponent } from 'react';

import * as Styled from './content-width.styles';
import { ContentWidthProps } from './content-width.interface';

export const ContentWidth: FunctionComponent<ContentWidthProps> = ({
  children,
}) => (
  <Styled.ContentWidth>
    {children}
  </Styled.ContentWidth>
);

export default ContentWidth;
