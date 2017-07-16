import React, { Component } from "react";

class AddPlace extends Component {
  constructor(){
    super();
    this.state = {
      newPlace:{}
    }
  }
  handleSubmit(e){
    if(this.refs.name.value === ''){
      alert('Name is required');
    } else {
      this.setState({newPlace:{
        name: this.refs.name.value
      }}, function(){
        this.props.addPlace(this.state.newPlace);
      })
    }
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h3>Add Place</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Place Name (City,cc) <em>cc = countrycode</em></label><br />
            <input type="text" ref="name" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddPlace;
