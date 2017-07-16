import React, { Component } from "react";
import DashboardItem from "./DashboardItem";

class Dashboards extends Component {
  deleteDashboard(place){
    this.props.onDelete(place);
  }
  render() {
    let dashboardItems;
    if(this.props.dashboards){
      dashboardItems = this.props.dashboards.map(dashboard => {
        // console.log(dashboard);
        return (
          <DashboardItem onDelete={this.deleteDashboard.bind(this)} key={dashboard.place} dashboard={dashboard} />
          )
      });
    }
    return (
      <div className="Dashboards">
      <h3>Dashboards</h3>
        {dashboardItems}
      </div>
    );
  }
}
export default Dashboards;
