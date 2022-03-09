import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        'X-Api-Key': 'd020f53f5de3456eb05fbe6eee0e5ff3'
    }
})