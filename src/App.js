

import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    quote: 'A truly rich man is one whose children run into his arms when his hands are empty.',
    author: '- Unknown',

  }

componentDidMount() {
  console.log('now');
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    this.setState({
      quote: data.content,
      author: data.author
    })
  })
}

clickHandler = () => {
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    this.setState({
      quote: data.content,
      author: data.author
    })
    const randomColor = (() => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`
    })();
    document.querySelector('body').style.backgroundColor = randomColor;
    document.querySelector('#quote-box').style.color = randomColor;
  })
  

}



render() {
  return (
    <div id="quote-box">
      <div id="quote">
        <div id="text">
          <p>
          {this.state.quote}
          </p>
          <p id="author">- {this.state.author}</p>
         

        </div>
        <div className="btns">
          <div className="left">
          <button><a id="tweet-quote" href="https://www.twitter.com/intent/tweet" target="_blank"> <i className="fab fa-twitter"></i> </a> </button>
          <button><i className="fab fa-tumblr"></i></button>

          </div>
          <div>
          <button id="new-quote" onClick={this.clickHandler}>New Quote</button>
          </div>

        </div>

      </div>

      
    </div>
  );
}
  
}

export default App;
