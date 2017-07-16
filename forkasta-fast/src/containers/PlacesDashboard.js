import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PlacesDashboard.css';
import * as placesActions from '../store/places/actions';
import * as placesSelectors from '../store/places/reducer';
import ListView from '../components/ListView';

class PlacesDashboard extends Component {

  componentDidMount() {
    this.props.dispatch(placesActions.fetchPlaces());
  }
  render() {
    if (!this.props.rowsById) return this.renderLoading();
    return (
      <div className="PlacesDashboard">
        <ListView
          rowsIdArray={this.props.rowsIdArray}
          rowsById={this.props.rowsById}
          renderRow={this.renderRow} />
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderRow(row) {
    return (
      <div>
        <h3>{row.name}</h3>
        <p>{row.temp}°</p>
        <p>{row.description}</p>
      </div>
    )
  }
}
  function mapStateToProps(state) {
    return {
      rowsById: placesSelectors.getPlacesByID(state),
      rowsIdArray: placesSelectors.getPlacesIDArray(state)
    };
  }

export default connect(mapStateToProps)(PlacesDashboard);