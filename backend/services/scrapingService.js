const cheerio = require('cheerio');
const axios = require('axios');

const scrapeWebsite = async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        return {
            title: $('title').text(),
            description: $('meta[name="description"]').attr('content'),
        };
    } catch (err) {
        throw new Error('Failed to scrape website');
    }
};

module.exports = { scrapeWebsite };