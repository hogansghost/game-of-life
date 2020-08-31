import styled from 'styled-components';

export const Input = styled.input`
  appearance: none;
  flex: 1 1 auto;
  min-width: 180px;
  color: var(--input-color, #000);
  border: 1px solid var(--input-bg-color, #000);
  background-color: var(--input-border-color, #000);
  border-radius: 3px;
  padding: 12px 16px;
  font-size: 16px;
  box-shadow: none;
  transition: all 275ms;

  @media screen and (min-width: 992px) {
    padding: 8px 12px;
  }

  &:focus {
    outline: 0;
    box-shadow: 0px 0px 5px -1px #dd0d4d;
    border-color: #dd0d4d;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
