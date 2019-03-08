import React, { Component } from 'react';

class Message extends Component {
  render() {
    const emoji = /:.[^\s]*:/;
    const messages = this.props.messages.map((message) => {
      if (emoji.test(message.content)) {
        console.log(`emoji detected! ${message.content}`);
      }
      return <span className="chat__messages" key={message.id}>[{new Date(message.timestamp).toLocaleTimeString('sv-SE')}] &lt;{message.username}&gt; {message.content}<br/></span>;
    })
    return (
      <>
        {messages}
      </>
    );
  }
}

export default Message;