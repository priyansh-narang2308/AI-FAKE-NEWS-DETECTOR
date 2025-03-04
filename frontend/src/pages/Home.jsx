import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeNews } from '../services/newsService';
import { toast } from 'react-toastify';
import { FaNewspaper, FaLink } from "react-icons/fa";

const Home = () => {
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isValidText = (input) => {
        return input.length >= 12 && /\s/.test(input);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidText(text)) {
            toast.error('Enter valid text.');
            return;
        }

        setLoading(true);

        try {
            const response = await analyzeNews({ text, url });

            const analyzedData = {
                text: text || "No text provided",
                url: url || "No URL provided",
                trustScore: response.data.trustScore || "N/A"
            };

            const storedNews = JSON.parse(localStorage.getItem('analyzedNews')) || [];
            storedNews.push(analyzedData);
            localStorage.setItem('analyzedNews', JSON.stringify(storedNews));

            navigate('/results', { state: { analysis: response.data } });
        } catch (err) {
            toast.error('Failed to analyze news. Please try again.');
            console.error('Error analyzing news:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-[url('/bg.webp')] bg-cover bg-center bg-black/70 bg-blend-overlay">
            <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl w-full">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">📰 AI Fake News Detector</h1>
                <p className="text-lg text-center text-gray-600 mb-6">Analyze news articles to determine their credibility.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Enter News Text</label>
                        <div className="relative">
                            <FaNewspaper className="absolute left-3 top-3 text-black text-xl" />
                            <textarea
                                className="w-full p-3 pl-10 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none resize-none h-28 bg-gray-200"
                                placeholder="News Content..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Enter News URL</label>
                        <div className="relative">
                            <FaLink className="absolute left-3 top-3 text-black text-xl" />
                            <input
                                type="url"
                                className="w-full p-3 pl-10 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none bg-gray-200"
                                placeholder="URL..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-xl ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? "🔍 Analyzing..." : " Analyze"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;