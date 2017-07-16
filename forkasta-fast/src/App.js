import React, { Component } from "react";
import Dashboards from "./Components/Dashboards";
import AddDashboard from "./Components/AddDashboard";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      dashboards: []
    }
  }
  componentWillMount(){
    this.setState({dashboards: [
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
  handleAddDashboard(dashboard){
    let dashboards = this.state.dashboards;
    dashboards.push(dashboard);
    this.setState({dashboards:dashboards});
  }
  handleDeleteDashboard(place){
    let dashboards = this.state.dashboards;
    let index = dashboards.findIndex(x => x.place === place);
    dashboards.splice(place, 1);
    this.setState({dashboards:dashboards});
  }
  render() {
    return (
      <div className="App">
        forkASTA-Fast
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