import React from 'react';
import ChatWindow from './ChatWindow.jsx';
import Textfield from './Textfield.jsx';
import {TextMessage} from '../classes/Messages.js'
import '../styles/App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount () {
    document.getElementById("chat-field").addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        this.saveMessage();
      }
  });
  }

  saveMessage() {
    const messages = this.state.messages;
    const message = new TextMessage('user', document.getElementById("chat-field").value);
    console.log(message)
    messages.push(message);
    this.setState(messages);
    document.getElementById("chat-field").value = '';
  };

  handleChange(e) {
    const targetField = e.target.id;
    const stateChange = {};
    stateChange[targetField] = e.target.value;
    this.setState(stateChange);
  };

  sendMessage() {
    fetch('/api/bot',{
      method: 'POST',
      body: JSON.stringify({
        userMessage: this.state.userMessage
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => {
      return res.json()
    }).then((botResponse) => {
      const historyUpdate = this.state.messages;
      historyUpdate.push(botResponse[0]);
      this.setState({messages: historyUpdate}) 
    });
  }

  render() {
    return (
      <div id="wrapper">
        <ChatWindow messages={this.state.messages} />
        <Textfield saveMessage={this.saveMessage.bind(this)} sendMessage={this.sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default App;