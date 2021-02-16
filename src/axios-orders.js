import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e6116-default-rtdb.firebaseio.com/'
});

export default instance;