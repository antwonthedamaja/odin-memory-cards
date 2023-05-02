import React from 'react';
import './style/app.css';
import Game from './components/Game';

const obamna = {name: 'obamna', src: '', toggle: false};
const juan = {name: 'juan', src: '', toggle: false};
const hampter = {name: 'hampter', src: '', toggle: false};
const slug = {name: 'slug', src: '', toggle: false};
const giga = {name: 'giga', src: '', toggle: false};
const sickos = {name: 'sickos', src: '', toggle: false};
const terry = {name: 'terry', src: '', toggle: false};
const vegeta = {name: 'vegeta', src: '', toggle: false};
const ted = {name: 'ted', src: '', toggle: false};

const array = [obamna, juan, hampter, slug, giga, sickos, terry, vegeta, ted];

function App() {
  return (
    <div className="App">
      <header>
        <div>Meme Memory</div>
        <div>
          <div>Made by: antwonthedamaja</div>
          <div>
            <div id="score">Score:</div>
            <div id="tally">Tally:</div>
          </div>
        </div>
      </header>
      <Game props={array}/>
    </div>
  );
}

export default App;