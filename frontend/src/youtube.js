import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDGA88ZIjtlUkCy0Bop_SAEU2_rfx4Rux0'
    }
});