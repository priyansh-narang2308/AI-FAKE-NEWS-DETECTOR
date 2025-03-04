const geminiapi = require('../config/geminiConfig');

const analyzeText = async (text) => {
    const prompt = `Analyze the following text for credibility:\n\n${text}`;

    try {
        console.log("Sending request to Gemini API..."); 
        const response = await geminiapi.generate({ prompt });

        console.log("Gemini API response:", response);

        if (!response || !response.data) {
            throw new Error("Invalid response from Gemini API");
        }

        return response.data.result || response.data;  
    } catch (error) {
        console.error('Error analyzing text:', error.message || error);
        return { error: 'Failed to analyze text', details: error.message || error };
    }
};

module.exports = { analyzeText };
