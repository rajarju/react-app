import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Title txt="123456" />
    );
  }
};


const Title = (props) => <h1>Title : {props.txt}</h1>

// Title.propTypes = {
//   txt : React.PropTypes.string.isRequired
// }


Title.propTypes = {
  txt(props, propName, component) {

    if(!(propName in props)) {
      return new Error(`Missing ${propName}`)
    }

    if(props[propName].length < 6) {
      return new Error(`${propName} was too short`)
    }

  }
}


export default App;
