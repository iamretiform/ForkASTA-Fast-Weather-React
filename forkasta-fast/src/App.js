import React, { Component } from "react";
import "./App.css";

const PLACES = [
  { city: "Chicago", country: "USA", zip: "94303" },
  { city: "San Jose", country: "USA", zip: "94088" },
  { city: "Santa Cruz", country: "USA", zip: "95062" },
  { city: "Honolulu", country: "USA", zip: "96803" }, 
  { city: "Rome", country: "Italy", zip: "Not Applicable" }
];




class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const city = this.props.city;
    const country = this.props.country;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
                zip +
                "&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial";
    fetch(URL).then(res => res.json(
      )).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.city}, {weatherData.country}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
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
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.city}
          </button>
        ))}
        <Dashboard key={activePlace} zip={PLACES[activePlace].zip} />
      </div>
    );
  }
}

export default App;