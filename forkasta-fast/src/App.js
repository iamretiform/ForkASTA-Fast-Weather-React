import React, { Component } from "react";
import Dashboards from "./Components/Dashboards";
import AddDashboard from "./Components/AddDashboard";
import Places from "./Components/Places"
import AddPlace from "./Components/AddPlace"
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      places: [],
      dashboards: []
    }
  }
  componentWillMount(){
    this.setState({
      places: [
      {
        name: "Roma,IT",
        id: 3169070
      }, 
      {
        name: "Chicago,US",
        id: 4887398
      }
      ],
      dashboards: [
      {
        place: "Roma,IT",
        id: 3169070,
        category: "Current",
        data: "weather data for Rome"
      }, 
      {
        place: "Chicago,US",
        id: 4887398,
        category: "Current",
        data: "weather data for Chicago"
      }
      ]});
  }
  handleAddPlace(place){
    let places = this.state.places;
    places.push(place);
    this.setState({places:places});
  }
  handleDeletePlace(name){
    let places = this.state.places;
    let index = places.findIndex(x => x.name === name);
    places.splice(index, 1);
    this.setState({places:places});
  }
  handleAddDashboard(dashboard){
    let dashboards = this.state.dashboards;
    dashboards.push(dashboard);
    this.setState({dashboards:dashboards});
  }
  handleDeleteDashboard(place){
    let dashboards = this.state.dashboards;
    let index = dashboards.findIndex(x => x.place === place);
    dashboards.splice(index, 1);
    this.setState({dashboards:dashboards});
  }
  render() {
    return (
      <div className="App">
        forkASTA-Fast
        <hr />
        <AddPlace addPlace={this.handleAddPlace.bind(this)}/>
        <hr />
        <Places places={this.state.places} onDelete={this.handleDeletePlace.bind(this)} />
        <hr />
        <AddDashboard addDashboard={this.handleAddDashboard.bind(this)}/>
        <hr />
        <Dashboards dashboards={this.state.dashboards} onDelete={this.handleDeleteDashboard.bind(this)} />
      </div>
    );
  }
}
export default App;


// const activePlace = this.state.activePlace;
// const forecastPlace = this.state.forecastPlace;
// constructor() {
//   super();
//   this.state = {
//     activePlace: 0,
//   };
// }
// import Current from "./modules/current";
// import Forecast from "./modules/forecast";
// import { MuiThemeProvider } from 'material-ui/styles';
// import Button from 'material-ui/Button';
// import Toolbar from 'material-ui/Toolbar';

// const PLACES = [
//   { city: "Chicago", country: "USA", zip: "94303" },
//   { city: "San Jose", country: "USA", zip: "94088" },
//   { city: "Santa Cruz", country: "USA", zip: "95062" },
//   { city: "Honolulu", country: "USA", zip: "96803" }, 
//   { city: "Roma", country: "IT", zip: "Not Applicable", id: 3169070 }
// ];
/*
<MuiThemeProvider>
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
</MuiThemeProvider>
*/