import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'chat'};
  }
  render() {
    if(this.state.page === 'login') {
      return (
        <div className="App">
          <div id="root">
            <div className="content border--1">
              <header className="header">
                <span className="header__title">ChatClient</span>
              </header>
              <main className="main border--2">
                <Login/>
              </main>
            </div>
          </div>
        </div>
      );
    } else if(this.state.page === 'chat') {
      return (
        <div className="App">
          <div id="root">
            <div className="content border--1">
              <header className="header">
                <span className="header__title">ChatClient</span>
              </header>
              <main className="main border--2">
                <Chat/>
              </main>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
