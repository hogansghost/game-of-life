import React, { FunctionComponent } from 'react';
import Cell from 'components/cell/cell';

import * as Styled from './culture.styles';
import { CultureProps } from './culture.interface';

export const Culture: FunctionComponent<CultureProps> = ({
  colCount,
  rowCount,
  onCellClick,
  grid,
}): JSX.Element => {
  return (
    <Styled.Culture
      grid={grid}
      colCount={colCount}
      rowCount={rowCount}
    >
      <Styled.CultureInner
        grid={grid}
        colCount={colCount}
        rowCount={rowCount}
      >
        { grid.map((row: Array<number | boolean>, rowIndex: number) => (
          row.map((cell: number | boolean, colIndex: number) => {
            return (
              <Cell
                key={`${rowIndex}=${colIndex}`}
                alive={cell}
                onClick={onCellClick(rowIndex, colIndex)}
              />
            )
          })
        ))}
      </Styled.CultureInner>
    </Styled.Culture>
  );
};

export default Culture;
