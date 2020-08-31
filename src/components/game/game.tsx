import React, { FunctionComponent, useState, useEffect, useRef, useCallback } from 'react';
import { produce } from 'immer';
import Culture from 'components/culture/culture';
import Button from 'components/ui/button/button';
import Input from 'components/ui/input/input';

import * as Styled from './game.styles';

const colCount = window.innerWidth <= 992 ? 20 : 40;
const rowCount = window.innerWidth <= 992 ? 20 : 40;

const createGrid = () => {
  const gridRows: Array<Array<number>> = [];

  for (let y = 0; y < rowCount; y++) {
    gridRows.push(Array.from(Array(colCount), () => 0));
  }
      
  return gridRows;
};

export const Game: FunctionComponent = (): JSX.Element => {
  const [grid, setGrid] = useState<Array<Array<number>>>(() => {
    return createGrid();
  });

  const [isRunning, setIsRunning] = useState<boolean | null>(null);
  const [intervalDuration, setIntervalDuration] = useState<number>(500);
  
  const simulationIntervalRef = useRef<number>();

  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

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
  
  const handleRunButtonClick = () => {
    const isRunningState = isRunning !== null ? !isRunning : true;
    
    setIsRunning(isRunningState);
  }
  
  const handleRandomButtonClick = () => {
    const gridRows = [];
    
    for (let i = 0; i < rowCount; i++) {
      gridRows.push(
        Array.from(Array(colCount), () => (Math.random() > 0.74 ? 1 : 0))
      );
    }
      
    setGrid(gridRows);
  }

  const handleClearButtonClick = () => {
    setGrid(createGrid);
  }
  
  const handleCellClick = (rowIndex: number, colIndex: number) => () => {
      const newGrid = produce(grid, newgrid => {
        newgrid[rowIndex][colIndex] = !newgrid[rowIndex][colIndex] ? 1 : 0;
      });
      
      setGrid(newGrid);
  };

  const handleOnChangeIntervalInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;

    setIntervalDuration(+target.value);
  };

  useEffect(() => {
    const isRunningExists = isRunning !== null;

    if (isRunningExists && isRunning) {
      console.info('starting');
      simulationIntervalRef.current = setInterval(runSimulation, intervalDuration);
    } else if (isRunningExists && !!simulationIntervalRef.current) {
      console.info('stopping');
      clearInterval(simulationIntervalRef.current);
    }
  }, [isRunning, intervalDuration, runSimulation]);

  return (
    <>
      <Styled.Game>
        <Styled.GameSection>
          <Culture
            grid={grid}
            colCount={colCount}
            rowCount={rowCount}
            onCellClick={handleCellClick}
          />
        </Styled.GameSection>

        <Styled.GameSection>
          <Styled.GameControls>
            <Styled.GameInterval>
              <Styled.GameIntervalLabel>Update the tick speed of the game</Styled.GameIntervalLabel>
              <Input disabled={!!isRunning} value={intervalDuration} onChange={handleOnChangeIntervalInput} />
            </Styled.GameInterval>

            <Button onClick={handleRunButtonClick}>{isRunning ? 'Stop' : 'Start'} simulation</Button>
            <Button onClick={handleRandomButtonClick}>Randomise</Button>
            <Button onClick={handleClearButtonClick}>Clear</Button>
          </Styled.GameControls>
        </Styled.GameSection>
      </Styled.Game>
    </>
  );
};

export default Game;
