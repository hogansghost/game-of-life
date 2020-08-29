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
  const [simulationInterval, setSimulationInterval] = useState<number>();
  const [intervalDuration, setIntervalDuration] = useState<number>(500);

  const cultureRef = useRef<HTMLDivElement>(null);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  


  const handleCellClick = (rowIndex: number, colIndex: number) => () => {
      const newGrid = produce(board, newBoard => {
        newBoard[rowIndex][colIndex] = !newBoard[rowIndex][colIndex] ? 1 : 0;
      });
      
      setBoard(newGrid);
  };

  const handleRunButtonClick = () => {
    setIsRunning(!isRunning);

    if (!isRunning) {
      isRunningRef.current = true;
      runSimulation();
    }
  }
  
  const runSimulation = useCallback(() => {
    console.log('runSimulation', isRunningRef.current);
    if (!isRunningRef.current) {
      return;
    }

    setBoard((grid) => {
      return produce(grid, (newGrid) => {

        for (let row = 0; row < rowCount; row++) {
          for (let col = 0; col < colCount; col++) {
            const neighbourArray = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
            let currentNeighbours = 0;

            neighbourArray.forEach(([x, y]) => {
              const rowI = row + x;
              const colI = col + y;

              if (rowI >= 0 && rowI < rowCount && colI >= 0 && colI < colCount) {
                currentNeighbours += grid[rowI][colI];
              }
            });

            if (currentNeighbours < 2 || currentNeighbours > 3) {
              newGrid[row][col] = 0;
            } else if (grid[row][col] === 0 && currentNeighbours === 3) {
              newGrid[row][col] = 1;
            }
          }
        }
      })
    })

    // setSimulationInterval(setTimeout(runSimulation, intervalDuration));
    setTimeout(runSimulation, intervalDuration);
  }, []);

  return (
    <>
    <button onClick={handleRunButtonClick}>Christ alive</button>
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
    </>
  );
};

export default Culture;
