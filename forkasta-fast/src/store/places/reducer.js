// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views
import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  placesByID: undefined,
  selectedPlaceIDs: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.PLACES_FETCHED:
      return state.merge({
        placesByID: action.placesByID
      });
    default:
      return state;
  }
}

export function getPlacesByID(state) {
  return state.places.placesByID;
}

export function getPlacesIDArray(state) {
  return _.keys(state.places.placesByID);
}

