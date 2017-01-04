import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      a : ''
    };
  }

  update(e) {
    this.setState({
      a : e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        {this.state.a}
      </div>
    );
  }
};

export default App;
