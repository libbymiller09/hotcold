import React from 'react';

import Title from './gametitle';
import Guess from './guessnumber';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make Your Guess',
      correct: Math.floor(Math.random() * 100) + 1
    };
  }

  restart() {
    this.setState({
      guesses: [],
      feedback: 'Make Your Guess',
      correct: Math.floor(Math.random() * 100) + 1
    });
  }

  guessing(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Enter valid number'});
      return;
    }
    const difference = Math.abs(guess - this.state.correct);

    let feedback;
    if(difference >= 50) {
      feedback = 'You are Ice cold';
    } else if (difference >= 25) {
      feedback = 'You are cold';
    } else if (difference >= 10) {
      feedback = 'You are warm';
    } else if (difference >=1) {
      feedback = 'You are hot';
    } else {
      feedback = 'Correct!';
    }
  
    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
    document.title = feedback ? `${feedback} | Hot or Cold`: 'Hot or Cold';
  }
}