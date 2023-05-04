import React, {useState} from 'react';
import './style/app.css';
import Game from './components/Game';
import Score from './components/Score';
import uniqid from 'uniqid';

const obamna = {name: 'obamna', key: uniqid(), toggle: false};
const juan = {name: 'juan', key: uniqid(), toggle: false};
const hampter = {name: 'hampter', key: uniqid(), toggle: false};
const slug = {name: 'slug', key: uniqid(), toggle: false};
const giga = {name: 'giga', key: uniqid(), toggle: false};
const sickos = {name: 'sickos', key: uniqid(), toggle: false};
const terry = {name: 'terry', key: uniqid(), toggle: false};
const ted = {name: 'ted', key: uniqid(), toggle: false};
const pepsiking = {name: 'pepsiking', key: uniqid(), toggle: false};
const daedon = {name: 'daedon', key: uniqid(), toggle: false};
const pondsage = {name: 'pondsage', key: uniqid(), toggle: false};
const garloid = {name: 'garloid', key: uniqid(), toggle: false};

const array = [obamna, juan, hampter, slug, giga, sickos, terry, ted, pepsiking, daedon, pondsage, garloid];

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
        <div id="logo">Meme Memory</div>
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