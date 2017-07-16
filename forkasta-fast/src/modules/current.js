import React, { Component } from "react";


class Current extends Component {
  constructor() {
    super();
    this.state = {
      currentData: null
    };
  }
  componentDidMount() {
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
                this.props.zip +
                "&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial";
    fetch(URL).then(res => res.json(
      )).then(json => {
      this.setState({ currentData: json });
    });
  }
  render() {
    const currentData = this.state.currentData;
    if (!currentData) return <div>Loading</div>;
    const weather = currentData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    console.log(this.props)
    return (
      <section id="current-data" style={{borderStyle: "dotted", width: "300px"}}>
      <div>
        <h1>
          {weather.main} in {currentData.id}
          <img src={iconUrl} alt={currentData.description} />
        </h1>
        <p>Current: {currentData.main.temp}°</p>
        <p>High: {currentData.main.temp_max}°</p>
        <p>Low: {currentData.main.temp_min}°</p>
        <p>Wind Speed: {currentData.wind.speed} mi/hr</p>
      </div>
      </section>
    );
  }
}

export default Current;

