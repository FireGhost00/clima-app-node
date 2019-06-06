const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.getClima(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b37045d975d16ede756e7fcd08e8c808`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}