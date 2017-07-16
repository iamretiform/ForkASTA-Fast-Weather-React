import React, { Component } from "react";

class DashboardWidget extends Component {
  deleteDashboardWidget(place){
    this.props.onDelete(place);
  }
  render() {
    return (
      <li className="DashboardWidget">
        {this.props.dashboardWidget.id}:
        <strong>
          {this.props.dashboardWidget.place}
        </strong> »
        {this.props.dashboardWidget.category}
        <br />
        <a href="#" onClick={this.deleteDashboardWidget.bind(this, this.props.dashboardWidget.place)}>Delete</a>
      </li>
    );
  }
}
export default DashboardWidget;
