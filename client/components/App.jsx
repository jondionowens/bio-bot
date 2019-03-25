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

  render() {
    return (
      <div>
        <div>This is a tt</div>
        <Textfield handleChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default App;