import React from 'react';

// import './Guess.css';

export default function Guess(props) {
    return (
        <div className="guess">
            {props.text}
        </div>
    );
};

Guess.defaultProps = {
    text: ''
};