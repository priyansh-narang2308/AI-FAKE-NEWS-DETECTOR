const axios = require('axios');

const fetchNews = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`);
        return response.data.articles;
    } catch (err) {
        throw new Error('Failed to fetch news');
    }
};

module.exports = { fetchNews };