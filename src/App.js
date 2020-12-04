
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));
export default Car;