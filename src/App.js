import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'login', username: ''};
  }
  handleLogin(e) {
    e.preventDefault();
    (/^[\wåäöÅÄÖ\d\s-]{1,12}$/.test(this.state.username)) ? this.setState({page: 'chat'}) : this.setState({page: 'login'});
  }
  handleChange(e) {
    this.setState({username: e.target.value});
  }
  render() {
    if(this.state.page === 'login') {
      return (
        <div className="App">
          <div className="content border--1">
            <header className="header">
              <span className="header__title">Chat</span>
            </header>
            <main className="main border--2">
              <Login handleLogin={this.handleLogin.bind(this)} handleChange={this.handleChange.bind(this)}/>
            </main>
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
                <Chat username={this.state.username}/>
              </main>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
