import React from 'react';
import '../style/game.css';
import Game from './Game';

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

function Initialize() {
    return (
        <Game props={array} />
    )
}

export default Initialize;