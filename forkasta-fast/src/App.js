import React, { Component } from 'react';
import './App.css';

const DEFAULT_PLACES = [
  { name: "CHICAGO", zip: "60618" },
  { name: "STAGECOACH", zip: "92849" },
  { name: "ROME", zip: "none" },
  { name: "CAPE CANAVERAL", zip: "32920" }
];

const APPLICATION_NAME = "···ForkASTA···ƒAST™···"

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <h2>Welcome to <br/>
        <b>{this.props.title}</b></h2>
      </div>
    )
  }
}

//to be used for searching for a city
class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input/>
        <button>SEARCH</button>
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

// This is the component that calls
// fetch (makes GET request) to the API. 
class GetWeatherData extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial";

    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    // return <div>{JSON.stringify(weatherData)}</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
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
      activePlace: 0,
      title: APPLICATION_NAME
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <Welcome title={this.state.title}/>
            <GetWeatherData key={activePlace} zip={DEFAULT_PLACES[activePlace].zip}/>
              {DEFAULT_PLACES.map((place, index) => (
                <button key={index} 
                  onClick={() => {this.setState(
                    { activePlace: index })
                  }}
                > 
            {place.name} 
            </button>
          ))}
          <br/>
          <Search/>
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


