const Feedback = require('../models/FeedbackModel');
const News = require('../models/NewsModel'); // Import News model

const submitFeedback = async (req, res) => {
    const { newsId, feedback } = req.body;

    if (!newsId || !feedback) {
        return res.status(400).json({ error: 'newsId and feedback are required' });
    }

    try {
        const existingNews = await News.findById(newsId);
        if (!existingNews) {
            return res.status(404).json({ error: 'News item not found' });
        }

        const newFeedback = new Feedback({
            newsId,
            feedback: feedback.trim()
        });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
    } catch (err) {
        console.error('Feedback submission error:', err);
        res.status(500).json({ error: 'Failed to submit feedback', details: err.message });
    }
};

const fetchFeedback = async (req, res) => {
    try {
        const feedbackList = await Feedback.find()
            .populate({
                path: 'newsId',
                select: 'title description url' 
            })
            .sort({ createdAt: -1 }); 

        res.status(200).json(feedbackList);
    } catch (err) {
        console.error('Fetch feedback error:', err);
        res.status(500).json({ error: 'Failed to fetch feedback', details: err.message });
    }
};

module.exports = { submitFeedback, fetchFeedback };