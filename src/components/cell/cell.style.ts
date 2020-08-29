import styled from 'styled-components';

interface CellProps {
    alive?: number | boolean,
};

export const Cell = styled.div<CellProps>`
    color: white;
    
    ${({ alive }) => `
        background: ${alive ? 'orange' : 'black'};
    `}
`;
