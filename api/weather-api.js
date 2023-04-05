const axios = require('axios')
const apiKey = 'b421f109a8af182db8628ef156675a86';
const latitude = 37.7272; // Example latitude
const longitude = -123.032; // Example longitude
const units = 'metric'
const endpoint = 'https://api.openweathermap.org/data/2.5/weather'

class OpenweathermapAPI{

    async getTempfromAPI(){
        const response = await axios.get(`${endpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`);
        // console.log(response.data.main.temp);
        return response.data.main.temp;

    }


};

module.exports = new OpenweathermapAPI();