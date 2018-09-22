import axios from 'axios';

const API =  axios.create({
  // baseURL: `http://dataservice.accuweather.com`
  //baseURL: `http://api.openweathermap.org/data/2.5/`
    baseURL: `https://api.darksky.net/forecast/28a463f7afd786332d4c15700ecc8988/`
});

export default API;
