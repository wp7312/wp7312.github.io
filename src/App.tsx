import React from 'react';
import { Toolbar } from './components/Overview/Toolbar/Toolbar';
import { InfoTiles } from './components/Overview/InfoTiles/InfoTiles';
import { createGlobalStyle } from 'styled-components';
import './App.css'
import { DetailsTile } from './components/Overview/DetailsTile/DetailsTile';

function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    font-family: 'AvenirMedium', 'AvenirMedium';
  }
`
  return (
    <div className="App">
      <GlobalStyle />
      <Toolbar />
      <InfoTiles />
      <DetailsTile />
    </div>
  );
}

export default App;
