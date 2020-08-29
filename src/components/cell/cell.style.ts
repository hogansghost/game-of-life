import styled from 'styled-components';

interface CellProps {
    alive?: number | boolean,
};

export const Cell = styled.div<CellProps>`
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${({ alive }) => `
        background: ${alive ? 'orange' : 'black'};
    `}
`;
