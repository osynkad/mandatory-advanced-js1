import React, { Component } from 'react';
import io from 'socket.io-client';

class Chat extends Component {
  constructor (props) {
    super(props);
    this.socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');
    this.state = {messages: []}
  }

  componentWillMount () {
    this.socket.on('messages', this.handleMessages.bind(this));
    this.socket.on('new_message', this.handleNewMessages.bind(this));
    this.socket.on('connect', this.logMessages.bind(this));
  }

  sendMessage(e) {
    e.preventDefault();
    this.socket.emit('message', {username: this.props.username, content: e.target.children[0].value});
    e.target.children[0].value = "";
  }
  handleMessages(messages) {
    console.log(messages);
    let arr = [];
    for (let message of messages) {
      arr.push(<span className="chat__messages" key={message.id}>[{new Date(message.timestamp).toLocaleTimeString('sv-SE')}] &lt;{message.username}&gt; {message.content}<br/></span>)
    }
    this.setState({messages: arr});
  }
  handleNewMessages(data) {
    console.log(this.state.messages);
    console.log(data);
  }
  logMessages() {
    console.log(this.state.messages);
  }
  render () {
    return (
      <div className="chat">
        <div className="chat__messages-outer border--4">
          <div className="chat__messages-inner border--3">
            <span className="chat__messages--login">Logged in as {this.props.username}!<br/></span>
            {this.state.messages}
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