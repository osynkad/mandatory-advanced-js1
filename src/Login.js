import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login">
        <p className="login__info">Enter your username to start chatting.</p>
        <span className="login__username"><u>U</u>ser name:</span>
        <form className="login__form border--4" onSubmit={this.props.handleLogin}>
          <input className="login__input-username border--3" type="text" onChange={this.props.handleChange}/>
          <button className="login__btn-login" type="submit">Login
            <div className="login__btn--inner-border border--1"/>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;