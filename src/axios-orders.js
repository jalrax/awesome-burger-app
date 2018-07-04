import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://awesome-burger-app.firebaseio.com/'
});

export default instance;