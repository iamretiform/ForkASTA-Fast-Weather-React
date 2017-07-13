import React, { Component } from "react";
import PlacesDashboard from './containers/PlacesDashboard';
import "./App.css";

// const PLACES = [
//   { city: "Chicago", country: "USA", zip: "94303" },
//   { city: "San Jose", country: "USA", zip: "94088" },
//   { city: "Santa Cruz", country: "USA", zip: "95062" },
//   { city: "Honolulu", country: "USA", zip: "96803" }, 
//   { city: "Rome", country: "Italy", zip: "Not Applicable" }
// ];


// class Current extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentData: null
//     };
//   }
//   componentDidMount() {
//     const zip = this.props.zip;
//     const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
//                 zip +
//                 "&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial";
//     fetch(URL).then(res => res.json(
//       )).then(json => {
//       this.setState({ currentData: json });
//     });
//   }
//   render() {
//     const currentData = this.state.currentData;
//     if (!currentData) return <div>Loading</div>;
//     const weather = currentData.weather[0];
//     const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
//     console.log(currentData)
//     return (
//       <div>
//         <h1>
//           {weather.main} in {currentData.name}
//           <img src={iconUrl} alt={currentData.description} />
//         </h1>
//         <p>Current: {currentData.main.temp}°</p>
//         <p>High: {currentData.main.temp_max}°</p>
//         <p>Low: {currentData.main.temp_min}°</p>
//         <p>Wind Speed: {currentData.wind.speed} mi/hr</p>
//       </div>
//     );
//   }
// }


//   class Forecast extends Component {
//     constructor() {
//       super();
//       this.state = {
//         forecastData: null
//       };
//     }
//     componentDidMount() {
//       const zip = this.props.zip;
//       const URL = "http://api.openweathermap.org/data/2.5/forecast?q=" +
//                   zip +
//                   "&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial";
//       fetch(URL).then(res => res.json(
//         )).then(json => {
//         this.setState({ forecastData: json });
//       });
//     }
//     render() {
//       const forecastData = this.state.forecastData;
//       if (!forecastData) return <div>Loading</div>;


//       console.log(forecastData)
//       return (
//         <div>
//         {forecastData.cnt}
//         </div>
//       );
//     }
//   }


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       activePlace: 0,
//       forecastPlace: -1,
//     };
//   }
//   render() {
//     const activePlace = this.state.activePlace;
//     const forecastPlace = this.state.forecastPlace;
//     return (
//       <div className="App">
//         {PLACES.map((place, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               this.setState({ activePlace: index }, { forecastPlace: index }, { name: place.name });
//             }}
//           >
//             {place.city}
//           </button>
//         ))}
//         <Current key={activePlace} zip={PLACES[activePlace].zip} />
//         <Forecast key={forecastPlace} zip={PLACES[activePlace].zip} />
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <PlacesDashboard />
      </div>
    );
  }
}

export default App;