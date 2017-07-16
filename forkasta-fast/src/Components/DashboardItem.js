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
        {this.props.dashboard.category}
        <br />
        <a href="#" onClick={this.deleteDashboard.bind(this, this.props.dashboard.place)}>Delete</a>
      </li>
    );
  }
}
export default DashboardItem;
