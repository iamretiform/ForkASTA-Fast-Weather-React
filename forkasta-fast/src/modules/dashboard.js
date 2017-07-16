import React, { Component } from "react";

class Finder extends Component
constructor(
  const finder = (city) => {
      return fetch(`api.openweathermap.org/data/2.5/find?q=${city}&type=accurate&mode=json`)
  })
}
  this.state{
    found_id: undefined,
  }
const finder = (city) => {
    return fetch(`api.openweathermap.org/data/2.5/find?q=${city}&type=accurate&mode=json`)
}

export default Finder;