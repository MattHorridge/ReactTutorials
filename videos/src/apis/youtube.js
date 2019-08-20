import axios from 'axios';


const KEY = 'AIzaSyAMgcGlebFsXd-GtPf0_iJl-uGChGTROeg';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
