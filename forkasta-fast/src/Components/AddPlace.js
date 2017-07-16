import React, { Component } from "react";

class AddPlace extends Component {
  constructor(){
    super();
    this.state = {
      newPlace:{}
    }
  };

  handleSubmit(e){
    if(this.refs.name.value === ''){
      alert('Name is required');
    } else {
      const URL = `http://api.openweathermap.org/data/2.5/find?q=${this.refs.name.value}&appid=e9ed86c3f9edf086eb52665e26c72844&type=accurate&mode=JSON`
      console.log(URL)
      fetch(URL).then(res => res.json()).then(json => {
                    console.log(json);
                    this.setState({ newPlace:{
                                      id: json.list[0].id,
                                      name: `${json.list[0].name},${json.list[0].sys.country}`}})
      this.props.addPlace(this.state.newPlace);
      })
    e.preventDefault();
    }
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
