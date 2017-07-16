import React, { Component } from "react";
import uuid from 'uuid';

class AddDashboardWidget extends Component {
  constructor(){
    super();
    this.state = {
      newDashboardWidget:{}
    }
  }
  handleSubmit(e){
    if(this.refs.place.value === ''){
      alert('Place is required');
    } else {
      this.setState({newDashboardWidget:{
        uuid: uuid.v4(),
        place: this.refs.place.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addDashboardWidget(this.state.newDashboardWidget);
      })
    }
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    let placeOptions = this.props.places.map(place => {
      return <option key={place.name} value={place.name}>{place.name}</option>
    });
    return (
      <div>
        <h3>Add DashboardWidget</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Place (City,cc) <em>cc = countrycode</em></label><br />
            <select ref="place">
              {placeOptions}
            </select>
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
AddDashboardWidget.defaultProps = {
  categories: ['Current', 'Forecast', 'Air', 'Map'],
}
export default AddDashboardWidget;
