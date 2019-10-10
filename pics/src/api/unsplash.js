import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8bc89a78133c938bf64d755a65109938d15d3c798b426272726f7a6d6e44ff74'
    }

});