import React, { Component } from "react";
import DashboardWidget from "./DashboardWidget";

class DashboardWidgets extends Component {
  deleteDashboardWidget(place){
    this.props.onDelete(place);
  }
  render() {
    let dashboardWidgets;
    if(this.props.dashboardWidgets){
      dashboardWidgets = this.props.dashboardWidgets.map(dashboardWidget => {
        // console.log(dashboard);
        return (
          <DashboardWidget onDelete={this.deleteDashboardWidget.bind(this)} key={dashboardWidget.place} dashboardWidget={dashboardWidget} />
          )
      });
    }
    return (
      <div className="DashboardWidgets">
      <h3>Dashboard Widgets</h3>
        {dashboardWidgets}
      </div>
    );
  }
}
export default DashboardWidgets;
