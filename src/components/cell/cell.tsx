import React, { FunctionComponent } from 'react';

import * as Styled from './cell.style';
import { CellProps } from './cell.interface';

export const Cell: FunctionComponent<CellProps> = ({
  alive,
  onClick
}) => (
  <Styled.Cell
    alive={alive}
    onClick={onClick}
  >
    {alive}
  </Styled.Cell>
);

export default Cell;
