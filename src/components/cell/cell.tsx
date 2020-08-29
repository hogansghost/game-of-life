import React, { FunctionComponent } from 'react';

import * as Styled from './cell.style';

interface CellProps {
  alive: number | boolean,
  key?: any,
  onClick: any,
};

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
