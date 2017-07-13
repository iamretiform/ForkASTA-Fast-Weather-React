// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import Immutable from 'seamless-immutable';

const initialState = Immutable({
  placesByID: {},
  selectedPlaceIDs: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// default info
// const oWM_ENDPOINT = 'http://api.openweathermap.org/data';
// const appid = '&appid=e9ed86c3f9edf086eb52665e26c72844&units=imperial';
// const defaultPlace = 'Rome,it' 
