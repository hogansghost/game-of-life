import styled from 'styled-components';

interface CellProps {
    alive?: number | boolean,
};

export const Cell = styled.div<CellProps>`
    color: rgba(255,255,255,0.5);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5em;
    
    ${({ alive }) => `
        background: ${alive ? 'orange' : 'black'};
    `}
`;
