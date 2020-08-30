import * as React from 'react';
import Game from 'components/game/game';
import ContentWidth from 'components/ui/content-width/content-width';
import Title from 'components/ui/title/title';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 12px;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
    padding: 0;
  }
`;

export function App() {
  return (
    <>
      <GlobalStyle />

      <ContentWidth>
        <Title>Culture</Title>
        
        <Game />
      </ContentWidth>
    </>
  );
}
