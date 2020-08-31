import styled from 'styled-components';

export const Game = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: minmax(0px, 1fr);
  grid-gap: 40px;
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const GameSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0px, 1fr);
`;

export const GameControls = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-gap: 20px;
  width: 500px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: left;

  @media screen and (min-width: 992px) {
    width: 700px;
  }
`;

export const GameInterval = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const GameIntervalLabel = styled.p`
  flex: 0 1 auto;
  min-width: 0;
  padding: 10px;
`;
