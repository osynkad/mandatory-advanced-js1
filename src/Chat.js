import React, { Component } from 'react';
import Message from './Message';
import io from 'socket.io-client';

class Chat extends Component {
  constructor (props) {
    super(props);
    this.socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');
    this.state = {messages: []};
  }

  componentWillMount () {
    this.socket.on('connect', this.loginMessage.bind(this));
    this.socket.on('messages', this.handleMessages.bind(this));
    this.socket.on('new_message', this.handleNewMessage.bind(this));
  }

  sendMessage(e) {
    e.preventDefault();
    this.socket.emit('message', {username: this.props.username, content: e.target.children[0].value}, (response) => {
      this.handleNewMessage(response.data.newMessage);
    })
    e.target.children[0].value = "";
  }

  handleMessages(messages) {
    this.setState({messages: messages});
  }

  handleNewMessage(message) {
    let arr = this.state.messages;
    arr.push(message);
    this.setState({messages: arr});
  }

  loginMessage() {
    this.setState({loginMessage: <span className="chat__messages--login">Logged in as {this.props.username}!<br/></span>})
  }

  render () {
    return (
      <div className="chat">
        <div className="chat__messages-outer border--4">
          <div className="chat__messages-inner border--3">
            {this.state.loginMessage}
            <Message messages={this.state.messages}/>
          </div>
        </div>
        <form className="chat__form border--4" onSubmit={this.sendMessage.bind(this)}>
          <input className="chat__input border--3" type="text"/>
          <button className="chat__btn-send" type="submit">Send
            <div className="chat__btn--inner-border border--1"/>
          </button>
        </form>
      </div>
    );
  }
}

export default Chat;