/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import '../style/game.css';
import samhyde from '../assets/samhyde.jpg'
import antwon from '../assets/antwon.jpg'
import hampter from '../assets/hampter.png'
import juan from '../assets/juan.png'
import obamna from '../assets/obamna.jpg'
import pepsiking from '../assets/pepsiking.jpg'
import pondsage from '../assets/pondsage.jpg'
import sickos from '../assets/sickos.png'
import slug from '../assets/slug.png'
import ted from '../assets/ted.jpg'
import terry from '../assets/terry.jpg'
import garloid from '../assets/garloid.png'

function Game(props) {
    const [list, setList] = useState(props.characters);
    const {increaseScore, increaseTally, resetTally, increaseLosses} = props;
    const images = {obamna, juan, hampter, slug, antwon, sickos, terry, ted, pepsiking, samhyde, pondsage, garloid}

    function shuffleList(clone) {
        for (let i = clone.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [clone[i], clone[j]] = [clone[j], clone[i]];
        }
        setList(clone);
    }

    function resetToggles() {
        const clone = structuredClone(list);
        clone.forEach(item => {
            item.toggle = false;
        });
        shuffleList(clone);
    }
    
    function handleClick(e) {
        if (list[e.target.dataset.index].toggle === false) {
            const clone = structuredClone(list);
            clone[e.target.dataset.index].toggle = true;
            const check = checkforWin(clone);
            shuffleList(clone);
            increaseTally();
            if (check) {
                resetTally();
                increaseScore();
            }
        } else {
            resetToggles();
            resetTally();
            increaseLosses();
        }
    }

    function checkforWin(clone) {
        if (clone.every(item => item.toggle === true)) {
            clone.forEach(item => {
                item.toggle = false;
            });
            return true;
        }
    }
    
    return (
        <div id="main">
            {list.map((item, index) => {
                return <div data-index={index} key={item.key} className='card' onClick={handleClick}>
                <img src={images[item.name]} />
                <div className='name'><span>{item.name}</span></div>
            </div>
            })}
        </div>
    )
}

export default Game;