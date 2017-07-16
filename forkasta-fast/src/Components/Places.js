import React, { Component } from "react";
import Place from "./Place";

class Places extends Component {
  deletePlace(name){
    this.props.onDelete(name);
  }
  render() {
    let places;
    if(this.props.places){
      places = this.props.places.map(place => {
        console.log(place);
        return (
          <Place onDelete={this.deletePlace.bind(this)} key={place.name} place={place} />
          )
      });
    }
    return (
      <div className="Places">
      <h3>Places</h3>
        {places}
      </div>
    );
  }
}
export default Places;
