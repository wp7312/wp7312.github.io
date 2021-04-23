import React from 'react';
import { Toolbar } from './components/Overview/Toolbar/Toolbar';
import { InfoTiles } from './components/Overview/InfoTiles/InfoTiles';
import { DetailedChartTile } from './components/Overview/DetailedChartTile/DetailedChartTile';
import { createGlobalStyle } from 'styled-components';
import './App.css'

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
      <DetailedChartTile />
    </div>
  );
}

export default App;
