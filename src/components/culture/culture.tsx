import React, { FunctionComponent, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { produce } from 'immer';
import Cell from 'components/cell/cell';

import * as Styled from './culture.styles';

export interface CellCoords {
  x: number,
  y: number,
};

const colCount = 40;
const rowCount = 30;

export const Culture: FunctionComponent = (): JSX.Element => {
  const [board, setBoard] = useState<Array<Array<number>>>(() => {
    const boardGrid: Array<Array<number>> = [];

    for (let y = 0; y < rowCount; y++) {
      boardGrid.push(Array.from(Array(colCount), () => 0));
    }
        
    return boardGrid;
  });

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [Duration, setIntervalDuration] = useState<number>(100);

  const cultureRef = useRef<HTMLDivElement>(null);


  const handleCellClick = (rowIndex: number, colIndex: number) => () => {
      // const cellIndex = Array.from(evt.currentTarget.parentElement.children).indexOf(evt.currentTarget);
      // const col = Math.floor(cellIndex % colCount);
      // const row = Math.floor(cellIndex / colCount);
      const newGrid = produce(board, newBoard => {
        newBoard[rowIndex][colIndex] = !newBoard[rowIndex][colIndex] ? 1 : 0;
      });
      
      setBoard(newGrid);
  };

  return (
    <Styled.Culture
      colCount={colCount}
      rowCount={rowCount}
      ref={cultureRef}
    >
      { board.map((row, rowIndex) => (
        row.map((cell, colIndex) => {
          return (
          <Cell
            key={`${rowIndex}=${colIndex}`}
            alive={cell}
            onClick={handleCellClick(rowIndex, colIndex)}
          />
        )})
      ))}
    </Styled.Culture>
  );
};

export default Culture;
