import React from 'react';
import './style/app.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header>
        <div>Meme Memory</div>
        <div id="score"></div>
        <div>Made by: antwonthedamaja</div>
      </header>
      <Game />
    </div>
  );
}

export default App;