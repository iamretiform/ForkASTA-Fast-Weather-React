import React, { Component } from "react";

class DashboardItem extends Component {
  deleteDashboard(place){
    this.props.onDelete(place);
  }
  render() {
    return (
      <li className="Dashboard">
        {this.props.dashboard.id}:
        <strong>
          {this.props.dashboard.place}
        </strong> »
        <br /> 
        {this.props.dashboard.category}
      <a href="#" onClick={this.deleteDashboard.bind(this, this.props.dashboard.place)}>X</a>
      </li>
    );
  }
}
export default DashboardItem;
