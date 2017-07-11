import React, { Component } from 'react';
import './App.css';

const DEFAULT_PLACES = [
  { name: "CHICAGO", zip: "60618" },
  { name: "STAGECOACH", zip: "92849" },
  { name: "ROME", zip: "none" },
  { name: "CAPE CANAVERAL", zip: "32920" }
];

class DashboardTitle extends Component {
  render() {
    return (
      <div className="DashboardTitle">
        <h2>Welcome to <br/>
        <b>···ForkASTA···ƒAST™···</b></h2>
        <h2/>
      </div>
    )
  }
}
class DashboardSearch extends Component {
  render() {
    return (
      <div className="DashboardSearch">
        <input/>
        <button>SEARCH</button>
      {/*to be used for searching for a city*/}
      </div>
    )
  }
}


class DashboardActiveCity extends Component {
  render() {
    return (
      <div className="DashboardActiveCity">
        <h3>——Displaying weather for–—</h3> 
        <text>City: {this.props.name}</text><br/>
        <text>Zip: {this.props.zip}</text>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <DashboardTitle/>
          {DEFAULT_PLACES.map((place, index) => (
            <button key={index} onClick={() => { this.setState({ 
              activePlace: index });
              console.log('Clicked index '+index);
              }}
            >
            {place.name}
            </button>
          ))}
          <br/>
          <br/>
          <DashboardSearch/>
          <DashboardActiveCity
                    key={activePlace}
                    name={DEFAULT_PLACES[activePlace].name}
                    zip={DEFAULT_PLACES[activePlace].zip}
                  />
        </div>
      );
    }
  }

export default App;


