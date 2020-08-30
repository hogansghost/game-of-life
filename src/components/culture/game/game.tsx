import React, { FunctionComponent, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { produce } from 'immer';

export interface CellCoords {
  x: number,
  y: number,
};

const colCount = 40;
const rowCount = 30;

const createGrid = () => {
  const gridRows: Array<Array<number>> = [];

  for (let y = 0; y < rowCount; y++) {
    gridRows.push(Array.from(Array(colCount), () => 0));
  }
      
  return gridRows;
};

export const Culture: FunctionComponent = (): JSX.Element => {
  const [grid, setGrid] = useState<Array<Array<number>>>(() => {
    return createGrid();
  });

  const [isRunning, setIsRunning] = useState<boolean | null>(null);
  const [intervalDuration, setIntervalDuration] = useState<number>(500);
  
  const simulationIntervalRef = useRef<number>();

  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  useEffect(() => {
    const isRunningExists = isRunning !== null;

    if (isRunningExists && isRunning) {
      console.info('starting');
      simulationIntervalRef.current = setInterval(runSimulation, intervalDuration);
    } else if (isRunningExists && !!simulationIntervalRef.current) {
      console.info('stopping');
      clearInterval(simulationIntervalRef.current);
    }
  }, [isRunning]);

  const handleCellClick = (rowIndex: number, colIndex: number) => () => {
      const newGrid = produce(grid, newgrid => {
        newgrid[rowIndex][colIndex] = !newgrid[rowIndex][colIndex] ? 1 : 0;
      });
      
      setGrid(newGrid);
  };

  const handleRunButtonClick = () => {
    const isRunningState = isRunning !== null ? !isRunning : true;

    setIsRunning(isRunningState);
  }

  const runSimulation = useCallback(() => {
    console.warn('simulating');
    setGrid((grid) => {
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
  }, []);

  const handleRandomButtonClick = () => {
    const gridRows = [];

    for (let i = 0; i < rowCount; i++) {
      gridRows.push(
        Array.from(Array(colCount), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }

    setGrid(gridRows);
  }

//   <Styled.Culture
//       colCount={colCount}
//       rowCount={rowCount}
//       onCellClick={handleCellClick}
//   />

  return (
    <>
        <button onClick={handleRunButtonClick}>Christ alive</button>
        <button onClick={handleRandomButtonClick}>Randomise</button>

        <h1>Simulation is {isRunning ? 'running' : 'not running'}</h1>
    </>
  );
};

export default Culture;
