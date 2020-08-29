import styled from 'styled-components';

export interface CultureMainProps {
    colCount: number;
    rowCount: number;
};

export const Culture = styled.div<CultureMainProps>`
    position: relative;
    border: 1px solid black;
    width: 80vh;
    height: 70vh;
    display: grid;
    grid-gap: 1px;

    ${(props) => `
        grid-template-columns: repeat(${props.colCount}, minmax(0, 1fr));
        grid-template-rows: repeat(${props.rowCount}, minmax(0, 1fr));
    `}
`;
