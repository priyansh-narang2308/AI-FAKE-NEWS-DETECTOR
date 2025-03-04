import { useState, useEffect } from 'react';
import { fetchFeedback } from '../services/newsService';
import FeedbackForm from '../components/FeedbackForm';
import NewsCard from '../components/NewsCard';
import { toast } from 'react-toastify';

const Feedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [selectedNewsId, setSelectedNewsId] = useState(null);
    const [selectedNews, setSelectedNews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadFeedback = async () => {
            try {
                setIsLoading(true);
                const response = await fetchFeedback();
                console.log("Full Feedback Response:", response);

                // If response.data is empty, handle it gracefully
                if (response.data.length === 0) {
                    toast.info('No news items available for feedback.');
                    setFeedbackList([]);
                } else {
                    // Process feedback data
                    const uniqueNews = response.data.reduce((acc, feedback) => {
                        if (!acc.find(news => news._id === feedback.newsId._id)) {
                            acc.push(feedback.newsId);
                        }
                        return acc;
                    }, []);

                    setFeedbackList(uniqueNews);
                }
            } catch (err) {
                console.error("Detailed Error:", err);
                toast.error(`Failed to load news: ${err.message}`);
                setFeedbackList([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadFeedback();
    }, []);

    const handleNewsSelect = (news) => {
        setSelectedNewsId(news._id);
        setSelectedNews(news);
    };

    // Render loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Feedback</h1>

            {feedbackList.length === 0 ? (
                <div className="alert alert-info shadow-lg flex justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>No news items available for feedback. Please check back later.</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {feedbackList.map((news) => (
                            <NewsCard
                                key={news._id}
                                title={news.title}
                                description={news.description}
                                url={news.url}
                                onReport={() => handleNewsSelect(news)}
                            />
                        ))}
                    </div>

                    {selectedNewsId && (
                        <FeedbackForm
                            newsId={selectedNewsId}
                            newsTitle={selectedNews?.title}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Feedback;