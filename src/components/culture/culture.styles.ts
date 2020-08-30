import styled from 'styled-components';

export interface CultureMainProps {
    colCount: number;
    rowCount: number;
};

export const Culture = styled.div<CultureMainProps>`
    position: relative;
    width: 80vh;
    height: 70vh;
    display: grid;
    grid-gap: 1px;
    background-color: rgba(0,0,0,0.8);

    ${(props) => `
        grid-template-columns: repeat(${props.colCount}, minmax(0, 1fr));
        grid-template-rows: repeat(${props.rowCount}, minmax(0, 1fr));
    `}
`;
