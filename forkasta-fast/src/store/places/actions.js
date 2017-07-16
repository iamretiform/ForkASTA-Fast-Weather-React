import _ from 'lodash';
import * as types from './actionTypes';
import oWMService from '../../services/oWM';

export function fetchPlaces() {
  return async(dispatch, getState) => {
    try {
      const endpoint = 'http://api.openweathermap.org/data';
      const appid = '&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial';
      const defaultPlace = 'Rome,IT' 
      const placesArray = await oWMService.getDefaultPlace(endpoint, defaultPlace, appid);
      const placesByID = _.keyBy(placesArray, (place) => place.id);
      dispatch({ type: types.PLACES_FETCHED, placesByID });
    } catch (error) {
      console.error(error);
    }
  }
}

