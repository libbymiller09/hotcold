import React from 'react';

// import './Start.css';

export default function Start(props) {
    return (
        <div className="start">
            {props.text}
        </div>
    );
};

Start.defaultProps = {
    text: ''
};