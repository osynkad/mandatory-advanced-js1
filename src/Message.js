import React, { Component } from 'react';
import Emoji from './list_emojis';

class Message extends Component {
  render() {
    const emojiRegex = /:.[^\s:]*:/g;
    const messages = this.props.messages.map((message) => {
      const found = message.content.match(emojiRegex);
      if (found) {
        for (let emoji of found) {
          if (Emoji[emoji]) {
            message.content = message.content.replace(emoji, Emoji[emoji]);
          }
        }
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