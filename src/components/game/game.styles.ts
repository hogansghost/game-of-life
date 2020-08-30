import styled from 'styled-components';

export const GameSection = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  &:nth-child(n+2) {
      margin-top: 40px;
  }
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

export const GameIntervalInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1 1 auto;
  min-width: 180px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 3px;
  padding: 12px 16px;
  font-size: 16px;
  box-shadow: none;

  @media screen and (min-width: 992px) {
    padding: 8px 12px;
  }

  &:focus {
    outline: 0;
    box-shadow: 0px 0px 5px -1px #dd0d4d;
    border-color: #dd0d4d;
  }
`;