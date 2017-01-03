import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      titleTxt : 'Hello World'
    };
  }


  update(e) {
    this.setState({titleTxt : e.target.value });
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title"> {this.state.titleTxt} </h1>
        <div>
          <Widget update={this.update.bind(this)} />
        </div>
        <div>
          <Widget update={this.update.bind(this)} />
        </div>
        <div>
          <Widget update={this.update.bind(this)} />
        </div>
        <div>
          <Widget update={this.update.bind(this)} />
        </div>
      </div>
    );
  }
};


const Widget = (props) => <input type="text" onChange={props.update } />

export default App;
