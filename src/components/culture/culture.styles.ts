import styled from 'styled-components';

import { CultureProps } from './culture.interface';

export const Culture = styled.div<CultureProps>`
    display: flex;
    align-items: stretch;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    width: 70vh;
    max-width: 100%;

    &::before {
        content: "";
        display: block;
        flex: 0 0 auto;
        width: 0;
        padding-bottom: 100%;
    }
`;
    
    export const CultureInner = styled.div<CultureProps>`
    flex: 1 1 auto;
    min-width: 0;
    display: grid;
    grid-gap: 1px;
    background-color: rgba(0,0,0,0.8);

    ${({ colCount, rowCount }) => `
        grid-template-columns: repeat(${colCount}, minmax(0, 1fr));
        grid-template-rows: repeat(${rowCount}, minmax(0, 1fr));
    `}
`;
