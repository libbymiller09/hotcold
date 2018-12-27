import React from 'react';

// import './Instructions.css';

export default function Instructions(props) {
    return (
        <div className="instructions">
            {props.text}
        </div>
    );
};

Instructions.defaultProps = {
    text: ''
};