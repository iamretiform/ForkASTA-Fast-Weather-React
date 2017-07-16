import React, { Component } from "react";

class DashboardWidget extends Component {
  constructor(){
    super();
    this.state = {
      widget: {}
    }
  }

  getBasicWeatherData(cat, loc){
    console.log(`Basic ${cat}`);
      const URL = `http://api.openweathermap.org/data/2.5/${cat}?id=${loc}&appid=e9ed86c3f9edf086eb52665e26c72844&mode=JSON`
      console.log(URL)
      fetch(URL).then(res => res.json()).then(json => {
                    console.log(json);
      })
    }

  getAirQualityReport(){
    console.log(`Air ${this.props}`);
    const URL = `http://api.openweathermap.org/pollution/v1/co/${this.props.lat},${this.props.lon}/current.json?appid=e9ed86c3f9edf086eb52665e26c72844`
      console.log(URL)
      fetch(URL).then(res => res.json()).then(json => {
                    console.log(json);
      })
    }

  getPrecipitationMap(c, place){
    console.log(`Map ${this.props}`);
    const URL = `http://tile.openweathermap.org/map/precipitation/5/${this.props.lat}/${this.props.lon}.png?appid=e9ed86c3f9edf086eb52665e26c72844`
      console.log(URL)
      fetch(URL).then(res => res.json()).then(json => {
                    console.log(json);
      })
    }


  deleteDashboardWidget(place){
    this.props.onDelete(place);
  }

  componentWillMount(){
    const loc = this.props.dashboardWidget.id
    const cat = this.props.dashboardWidget.category
    if(cat === 'Current' || cat === 'Forecast'){
      if(cat === 'Current'){
        const cat = 'weather'
        this.setState({widget: this.getBasicWeatherData(cat, loc)})
      } else {
        this.setState({widget: this.getBasicWeatherData(cat, loc)})}
    } else if(cat ==='Air'){
      this.setState({widget: this.getAirQualityReport(cat, loc)})
    } else if(cat === 'Map'){
      this.setState({widget: this.getPrecipitationMap(cat, loc)})
    } else {
      alert('Something went wrong, please try again!');
    }
    console.log(this.state.widget);
  }

  render() {
    return (
      <div>
      <li className="DashboardWidget">
        {this.props.dashboardWidget.uuid}:{this.props.dashboardWidget.id}
        <strong>
          {this.props.dashboardWidget.place}
        </strong> »
        {this.props.dashboardWidget.category}
        <br />
        <button href="#" onClick={this.deleteDashboardWidget.bind(this, this.props.dashboardWidget.uuid)}>Delete</button>
      </li>
        {this.state.widget}
      </div>
    );
  }
}
export default DashboardWidget;
