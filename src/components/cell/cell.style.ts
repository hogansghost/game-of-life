import styled from 'styled-components';

import { CellProps } from './cell.interface';

export const Cell = styled.div<Pick <CellProps, 'alive'>>`
  position: relative;
  color: rgba(255,255,255,0.5);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  cursor: pointer;

  ${({ alive }) => `
    background-color: ${alive ? '#dd0d4d' : '#000000'};
  `}
`;
