import React, { Component } from "react";
import DashboardWidgets from "./Components/DashboardWidgets";
import AddDashboardWidget from "./Components/AddDashboardWidget";
import Places from "./Components/Places"
import AddPlace from "./Components/AddPlace"
import uuid from 'uuid';
import { Button, Menu, Header } from 'semantic-ui-react'
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      places: [],
      dashboardWidgets: []
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
      dashboardWidgets: [
      {
        uuid: uuid.v4(),
        place: "Roma,IT",
        id: 3169070,
        category: "Current",
        data: "weather data for Rome"
      }, 
      {
        uuid: uuid.v4(),
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
  handleAddDashboardWidget(dashboardWidget){
    let dashboardWidgets = this.state.dashboardWidgets;
    dashboardWidgets.push(dashboardWidget);
    this.setState({dashboardWidgets:dashboardWidgets});
  }
  handleDeleteDashboardWidget(uuid){
    let dashboardWidgets = this.state.dashboardWidgets;
    let index = dashboardWidgets.findIndex(x => x.uuid === uuid);
    dashboardWidgets.splice(index, 1);
    this.setState({dashboardWidgets:dashboardWidgets});
  }
  render() {
    return (
      <div className="App">
        <Header className="App-header">
        forkASTA-Fast Weather
        </Header>
        <Menu >
        <hr />
        <AddPlace addPlace={this.handleAddPlace.bind(this)}/>
        <hr />
        <Places places={this.state.places} onDelete={this.handleDeletePlace.bind(this)} />
        <hr />
        <AddDashboardWidget places={this.state.places} addDashboardWidget={this.handleAddDashboardWidget.bind(this)}/>
        <hr />
        </Menu>
        <DashboardWidgets dashboardWidgets={this.state.dashboardWidgets} onDelete={this.handleDeleteDashboardWidget.bind(this)} />
      </div>
    );
  }
}
export default App;
