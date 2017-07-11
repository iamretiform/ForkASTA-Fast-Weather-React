import React, { Component } from 'react';
import './App.css';

const POPULAR_PLACES = [
  { name: "CHICAGO", zip: "60618" },
  { name: "STAGECOACH", zip: "92849" },
  { name: "ROME", zip: "none" },
  { name: "CAPE CANAVERAL", zip: "32920" }
];

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <h2>Welcome to <br></br>
        <b>···ForkASTA···ƒAST™···</b></h2>
        <h3>——Displaying weather for–—</h3> 
        <text>City: {this.props.name}</text><br></br>
        <text>Zip: {this.props.zip}</text>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard name={"CHICAGO"} zip={"60618"} />
          {POPULAR_PLACES.map((place, index) => (
            <button
              key={index}
              onClick={() => {
                console.log('Clicked index '+index);
              }}
            >
            {place.name}
            </button>
          ))}
        </div>
      );
    }
  }

export default App;


