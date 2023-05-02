/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import '../style/game.css';
import uniqid from 'uniqid';

function Game({props}) {
    const [list, setList] = useState(props);

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
            shuffleList(clone);
        } else {
            resetToggles();
        }
    }

    function renderList() {
        const array = [];
        list.forEach((item, index) => {
            const element = <div data-index={index} key={uniqid()} className='card' onClick={handleClick}>
                <div className='picture'></div>
                <div className='name'>{item.name + ' ' + item.toggle}</div>
            </div>
            array.push(element);
        });
        return array;
    }
    
    return (
        <main>
            {renderList()}
        </main>
    )
}

export default Game;