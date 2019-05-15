const axios = require('axios');

const API_URL = 'http://localhost:5000/api';
const getAll = async () => {
    const response = await axios.get(API_URL + '/memes');
    return response.data;

}

const create = async (meme) => {

    const response = await axios.post(API_URL + '/memes');
    return response.data;


}
export default {
    getAll,
}