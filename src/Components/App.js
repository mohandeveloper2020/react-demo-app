import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body welcome={'Welcome Dudes!'} gift={'Enter your name to get the gift.'}/>
        <Footer />
      </div>
    );
  }
}

export default App;
