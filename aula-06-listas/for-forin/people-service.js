const axios = require('axios');

const URL = `https://swapi.dev/api/people`;

async function getPeoples(name) {
    const url = `${URL}/?search=${name}&format=json`;
    const response = await axios.get(url);
    return response.data;
}

module.exports = {
    getPeoples
}

// getPeoples('r2').then(function(result) {
//     console.log(result);
// }).catch(function(e) {
//     console.error(e);
// })