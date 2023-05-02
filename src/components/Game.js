/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import '../style/game.css';
import uniqid from 'uniqid';

function Game({props}) {
    const [list, setList] = useState(props);
    
    function shuffleList() {
        const clone = structuredClone(list);
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
        setList(clone);
    }
    
    function renderList() {
        const array = [];
        list.forEach(item => {
            const element = <div key={uniqid()} className='card'>
                <div className='picture'></div>
                <div className='name'>{item.name}</div>
            </div>
            array.push(element);
        });
        return array;
    }
    
    return (
        <main onClick={shuffleList}>
            {renderList()}
        </main>
    )
}

export default Game;