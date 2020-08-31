import * as React from 'react';
import Game from 'components/game/game';
import ContentWidth from 'components/ui/content-width/content-width';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --content-bg-color: rgba(255,255,255,1);
    --content-color: rgba(0,0,0,0.85);
    --input-color: rgba(0,0,0,0.85);
    --input-bg-color: rgba(0,0,0,0.05);
    --input-border-color: rgba(0,0,0,0.05);

    @media screen and (prefers-color-scheme: dark) {
      --content-bg-color: rgba(0,0,0,0.85);
      --content-color: rgba(255,255,255,0.85);
      --input-color: rgba(255,255,255,0.85);
      --input-bg-color: rgba(255,255,255,0.15);
      --input-border-color: rgba(255,255,255,0.15);
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    background-color: var(--content-bg-color, #fff);
    color: var(--content-color, #000);
    transition: background-color 275ms, color 275ms;
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
        <Game />
      </ContentWidth>
    </>
  );
}
