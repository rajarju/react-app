import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      titleTxt : 'Hello World',
      subHead : 'This is a Sub Head'
    };
  }


  update(e) {
    this.setState({titleTxt : e.target.value });
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title"> {this.state.titleTxt} </h1>
        <b>{this.state.subHead}</b>
        <div>
          <input type="text" onChange={this.update.bind(this)} />
        </div>
      </div>
    );
  }
};

export default App;
