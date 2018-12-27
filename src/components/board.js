import React from 'react';

// import './card.css';

export default function Board(props) {
    return (
        <div className="board">
            {props.text}
        </div>
    );
};

Board.defaultProps = {
    text: ''
};