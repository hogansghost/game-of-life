import * as React from 'react';
import Culture from 'components/culture/culture';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.h1`
  font-family: sans-serif;
  text-align: center;
  color: #333333;
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <Title>Culture</Title>
      <Culture>
      </Culture>
    </>
  );
}
