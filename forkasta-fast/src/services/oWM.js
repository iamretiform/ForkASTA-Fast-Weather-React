import _ from 'lodash';
// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service


class oWMService {

  async getDefaultPlace(endpoint, defaultPlace, appid) {
    const url = `${endpoint}/2.5/weather?q=${defaultPlace}${appid}`;
    console.log(url)
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
    const place = [{ 
                    id: data.sys.id, 
                    name: data.name,
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    humidity: data.main.humidity
                  }]
    console.log(place)
    return place 
  }

}
export default new oWMService()
