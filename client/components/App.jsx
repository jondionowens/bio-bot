import React from 'react';
import Textfield from './Textfield.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

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
        userMessage: 'HI there JonBot!'
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      return response.json()
    }).then(function(body){
      console.log(body);
    });

  }

  render() {
    return (
      <div>
        <div>Ask a question about Jon:</div>
        <Textfield handleChange={this.handleChange.bind(this)} sendMessage={this.sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default App;