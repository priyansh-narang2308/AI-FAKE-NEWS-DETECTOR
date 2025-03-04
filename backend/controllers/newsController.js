const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require("dotenv");
const validateNewsInput = "../utils/validation";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeNews = async (req, res) => {
    try {
        const { text, url } = req.body;

        if (!text && !url) {
            validateNewsInput;

            return res.status(400).json({ error: "Failed to Analyze news. Please try again" });
        }


        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            systemInstruction: `
            Pretend you are a news analyst. I will give you some text related to the news.
            Return a score named trustScore between 0 to 100.
            Do not give in markdown format, just give a number.
            `
        });

        const result = await model.generateContent(text);

        console.log(result.response);
        const rawScore = result.response?.candidates[0]?.content?.parts[0]?.text || "50";
        const trustScore = parseInt(rawScore.trim(), 10);

        if (isNaN(trustScore)) {
            throw new Error("Invalid score received from AI");
        }

        res.json({ trustScore });
    } catch (error) {
        console.error("Error analyzing news:", error);
        res.status(500).json({ error: "Failed to analyze news", details: error.message });
    }
};

module.exports = analyzeNews;
