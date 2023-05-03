/* eslint-disable react/prop-types */
import React from 'react';

function Score(props) {
    return (
        <div>
            <span>
                Score: {props.score} - {props.losses}
            </span>
            <div>
                Tally: {props.tally}
            </div>
        </div>
    )
}

export default Score;