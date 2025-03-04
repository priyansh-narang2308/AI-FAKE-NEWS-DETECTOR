const validateNewsInput = (text, url) => {
    if (!text && !url) {
        throw new Error('Either text or URL is required');
    }
};

module.exports = { validateNewsInput };