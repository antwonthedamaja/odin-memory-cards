import React from 'react';
import '../style/game.css';
import Game from './Game';

const obamna = {name: 'obamna', src: '', toggle: false};
const juan = {name: 'juan', src: '', toggle: false};

const array = [obamna, juan];

function Initialize() {


    return (
        <Game props={array} />
    )
}

export default Initialize;