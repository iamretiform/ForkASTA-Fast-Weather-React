import React, { Component } from "react";

class AddDashboard extends Component {
  constructor(){
    super();
    this.state = {
      newDashboard:{}
    }
  }
  handleSubmit(e){
    if(this.refs.place.value === ''){
      alert('Place is required');
    } else {
      this.setState({newDashboard:{
        place: this.refs.place.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addDashboard(this.state.newDashboard);
      })
    }
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Dashboard</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Place (City,cc) <em>cc = countrycode</em></label><br />
            <input type="text" ref="place" />
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
AddDashboard.defaultProps = {
  categories: ['Current', 'Forecast', 'Air', 'Map']
}
export default AddDashboard;
