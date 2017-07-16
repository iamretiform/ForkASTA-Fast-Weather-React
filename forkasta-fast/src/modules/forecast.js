import React, { Component } from "react";

class Forecast extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/forecast?q=" +
                zip +
                "&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial";
    fetch(URL).then(res => res.json(
      )).then(json => {
      this.setState({ forecastData: json });
    });
  }
  render() {
    const forecastData = this.state.forecastData;
    if (!forecastData) return <div>Loading</div>;


    console.log(this.props)
    return (
      <section id="forecast-data" style={{borderStyle: "dashed", width: "100px"}}>
      <div> 
      <h2>{forecastData.list[0].dt_text}</h2>
      <br/>
      {forecastData.list[0].weather[0].description}
      <br/>
      {forecastData.list[0].main.temp}
      </div>
      </section>
    );
  }
}


export default Forecast