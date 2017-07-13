import _ from 'lodash';
// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

class oWMService {

  async getDefaultPlace(endpoint, appid, location) {
    const url = `${endpoint}/2.5/weather?q=${location}${appid}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`oWMService getDefaultPlaces failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    const children = _.get(data, 'data.children');
    if (!children) {
      throw new Error(`oWMService getDefaultPlaces failed, children not returned`);
    }
    return _.map(children, (place) => {
      // abstract away the specifics of the oWM API response and take only the fields we care about
      return {
        id: _.get(place, 'data.sys.id'),
        name: _.get(place, 'data.name'),
        temp: _.get(place, 'data.main.temp'),
        description: _.get(place, 'data.weather.description'),
        humidity: _.get(place, 'data.main.humidity')
      }
    });
  }

}
export default new oWMService()
