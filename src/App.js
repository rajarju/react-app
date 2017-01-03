import React from 'react';

class App extends React.Component {
  render() {
    let title = this.props.appTitle;
    return (
      <div className="wrapper">
        <h1 className="title"> {title} </h1>
        <b>Sub Head</b>
      </div>
    );
  };
};

App.propTypes = {
  appTitle : React.PropTypes.string,
  counter : React.PropTypes.number.isRequired
};


App.defaultProps = {
  appTitle : 'Default Title',
  counter : 2
};

export default App;
