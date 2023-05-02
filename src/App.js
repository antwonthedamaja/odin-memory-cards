import React from 'react';
import './style/app.css';
import Initialize from './components/Initialize';

function App() {
  return (
    <div className="App">
      <header>
        <div>Meme Memory</div>
        <div id="score"></div>
        <div>Made by: antwonthedamaja</div>
      </header>
      <Initialize />
    </div>
  );
}

export default App;