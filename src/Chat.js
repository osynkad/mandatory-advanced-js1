import React, { Component } from 'react';

class Chat extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="chat">
        <div className="chat__messages-outer border--4">
          <div className="chat__messages-inner border--3">
            <span className="chat__messages--login">Logged in as &#123;user&#125;!<br/></span>
            <span className="chat__messages">[00:00] &lt;user&gt; &#123;message&#125;<br/></span>
            <span className="chat__messages">[00:00] &lt;user&gt; &#123;message&#125;<br/></span>
          </div>
        </div>
        <form className="chat__form border--4">
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