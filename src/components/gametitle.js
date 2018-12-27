import React from 'react';

import './title.css';
import './gametitle';

export default function Title(props) {
    return (
        <nav>
            <a href="#what" className="what">What?</a>
            <a href="#newGame" className="newGame">New Game</a>
        </nav>
    );
};

Title.defaultProps = {
    text: ''
};