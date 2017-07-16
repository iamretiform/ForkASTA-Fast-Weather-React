import React, { Component } from "react";

class Place extends Component {
  deletePlace(name){
    this.props.onDelete(name);
  }
  render() {
    return (
      <li className="Place">
        {this.props.place.id}:
        <strong>
          {this.props.place.name}
        </strong> »
        <br />
        <button href="#" onClick={this.deletePlace.bind(this, this.props.place.name)}>Delete</button>
      </li>
    );
  }
}
export default Place;
