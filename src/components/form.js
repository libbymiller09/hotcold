import React from 'react';

// import './card.css';

export default function Form(props) {
    return (
        <div className="form">
            <form className="guessForm">
                <h2>Make Your Guess!</h2>
                <label for="guess"></label>
                <input type="text" className="guess" placeholder="Enter Your Guess"></input>
                <button className="guessButton" type="submit">Guess</button>
                <h2>Guess #<span>Number</span>!</h2>
            </form>
        </div>
    );
};

Form.defaultProps = {
    text: ''
};