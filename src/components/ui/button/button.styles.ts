import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 3px;
  background: #dd0d4d;
  border: 0;
  color: white;
  text-align: center;
  margin: 0;
  padding: 12px 16px;
  cursor: pointer;
  box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.1), 0px 2px 9px -3px rgba(0,0,0,0.15);
  transition: all 275ms;

  @media screen and (min-width: 992px) {
    padding: 8px 12px;
  }
  
  &:hover {
    box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1), 0px 3px 13px -3px rgba(0,0,0,0.15);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 0;
    box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1), 0px 3px 13px -3px rgba(0,0,0,0.15), 0px 2px 5px -1px #dd0d4d;
  }
`;
