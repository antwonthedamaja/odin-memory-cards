import React, {useState} from 'react';
import './style/app.css';
import Game from './components/Game';
import Score from './components/Score';

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
  const [score, setScore] = useState(0);
  const [losses, setLosses] = useState(0);
  const [tally, setTally] = useState(0);

  function increaseScore() {
    setScore(score + 1);
  }

  function increaseTally() {
    setTally(tally + 1);
  }

  function increaseLosses() {
    setLosses(losses + 1);
  }

  function resetTally() {
    setTally(0);
  }

  return (
    <div className="App">
      <header>
        <div>Meme Memory</div>
        <div>
          <div>Made by: antwonthedamaja</div>
          <Score score={score} losses={losses} tally={tally}/>
        </div>
      </header>
      <Game characters={array} increaseScore={increaseScore} increaseTally={increaseTally}
      resetTally={resetTally} increaseLosses={increaseLosses}/>
    </div>
  );
}

export default App;