import React, { Component } from 'react';

class Body extends Component {
  // captureValue(e) {
  //   var inputValue = e.target.value;
  //   console.log(inputValue);
  // }
  sayHello() {
    // alert('Hello');
    // console.log(this);
    var userInput = document.getElementById('userInput').value;
    alert(`Hello ${userInput}`);
    document.getElementById('userInputName')
    .innerHTML = `Welcome <strong>${userInput}</strong>, your gift is ready. Go collect from your husband.`;
    document.getElementById('userInput').value = '';
  }

  render() {
    var welcome = this.props.welcome;
    var gift = this.props.gift;

    // console.log(this.props);
    return (
      <div className="App-Body">
        <h3>{welcome}</h3>
        <p>{gift}</p>
        <input
          id="userInput"
          placeholder="Enter your name"
          // onChange={this.captureValue}
        />
        <button
            className="App-link"
            onClick={this.sayHello}
          >
            {'Submit'}
          </button>
          <p id="userInputName"></p>
      </div>
    );
  }
}

export default Body;
