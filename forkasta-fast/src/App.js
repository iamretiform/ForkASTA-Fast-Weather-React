import React, { Component } from "react";
import Current from "./modules/current";
import Forecast from "./modules/forecast";
import "./App.css";
import { MuiThemeProvider } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';




const PLACES = [
  { city: "Chicago", country: "USA", zip: "94303" },
  { city: "San Jose", country: "USA", zip: "94088" },
  { city: "Santa Cruz", country: "USA", zip: "95062" },
  { city: "Honolulu", country: "USA", zip: "96803" }, 
  { city: "Roma", country: "IT", zip: "Not Applicable", id: 3169070 }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    const forecastPlace = this.state.forecastPlace;
    return (
    <MuiThemeProvider>
      <div className="App">
      <div>

      <Toolbar style={{borderStyle: "solid"}}>
        {PLACES.map((place, index) => (
          <Button
            key={index}
            onClick={() => {
              this.setState({ 
                activePlace: index, city: place.city, country: place.country });
            }}
          >
            {place.city}
          </Button>
        ))}
        </Toolbar>
        <hr />
        </div>
        <Current key={activePlace} zip={PLACES[activePlace].zip} />
        <Forecast key={forecastPlace} zip={PLACES[activePlace].zip} />
      </div>
    </MuiThemeProvider>
    );
  }
}
export default App;
