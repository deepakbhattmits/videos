import axios from 'axios';

const KEY = 'AIzaSyChS4B8AQrRFDKZm9tolBJztcERuwtVADw';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
       part: 'snippet',
       maxResults: 10,
       key: KEY 
    },
});