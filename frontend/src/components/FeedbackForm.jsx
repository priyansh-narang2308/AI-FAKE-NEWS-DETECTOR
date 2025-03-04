import { useState } from 'react';
import { submitFeedback } from '../services/newsService';
import { toast } from 'react-toastify';

const FeedbackForm = ({ newsId, newsTitle }) => {
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!feedback.trim()) {
            toast.error('Please enter your feedback.');
            return;
        }
        if (!newsId) {
            // toast.error('No news item selected for feedback.');
            return;
        }

        setLoading(true);
        try {
            await submitFeedback({ newsId, feedback });
            toast.success('Feedback submitted successfully!');
            setFeedback('');
        } catch (err) {
            console.error('Feedback submission error:', err);
            toast.error('Failed to submit feedback. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="mt-6 bg-base-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
                Provide Feedback for:
                <span className="text-primary ml-2">{newsTitle || 'Selected News'}</span>
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Feedback</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="Enter your detailed feedback..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-4"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;