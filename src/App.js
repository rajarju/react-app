import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      a : '',
      b : ''
    };
  }

  update(e) {
    this.setState({
      a : ReactDOM.findDOMNode(this.a).value,
      b : this.refs.b.value
    })
  }

  render() {
    return (
      <div>
        <Input ref={ component => this.a = component }  update={this.update.bind(this)} />
        {this.state.a}
        <hr />
        <input ref="b" type="text" onChange={this.update.bind(this)} />
        {this.state.b}
      </div>
    );
  }
};

class Input extends React.Component {
  render() {
    return <input type="text" onChange={this.props.update} />
  }
}

export default App;
