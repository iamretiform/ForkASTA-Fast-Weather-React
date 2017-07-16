import React, { Component } from "react";

class DashboardWidget extends Component {
  deleteDashboardWidget(place){
    this.props.onDelete(place);
  }
  render() {
    return (
      <li className="DashboardWidget">
        {this.props.dashboardWidget.uuid}:{this.props.dashboardWidget.id}
        <strong>
          {this.props.dashboardWidget.place}
        </strong> »
        {this.props.dashboardWidget.category}
        <br />
        <button href="#" onClick={this.deleteDashboardWidget.bind(this, this.props.dashboardWidget.uuid)}>Delete</button>
      </li>
    );
  }
}
export default DashboardWidget;
