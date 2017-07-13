import _ from 'lodash';
import * as types from './actionTypes';
import oWMService from '../../services/oWM';

export function fetchPlaces() {
  return async(dispatch, getState) => {
    try {
      const placesArray = await oWMService.getDefaultPlaces();
      const placesByID = _.keyBy(placesArray, (place) => place.id);
      dispatch({ type: types.PLACES_FETCHED, placesByID });
    } catch (error) {
      console.error(error);
    }
  };
}