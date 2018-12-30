import React from 'react';

import Form from './form';
import Feedback from './feedback';
// import './Guess.css';

export default function Guess(props) {
    const { feedback, guess  } = props;

    return (
        <div className="guess">
            <Feedback feedback={feedback} guess={guess} />
            <Form guessing={guess => props.guessing(guess)} /> 
        </div>
    );
};
