import { useLocation } from 'react-router-dom';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import TrustScore from '../components/TrustScore';

const Results = () => {
    const { state } = useLocation();
    console.log("Received state in Results.js:", state);

    if (!state || typeof state.analysis?.trustScore !== 'number') {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-center text-red-600 text-5xl font-bold">
                    <FaExclamationTriangle className="inline-block mr-3 text-6xl" />
                    No valid data received.
                </h1>
            </div>
        );
    }

    const { trustScore, scrapedData } = state.analysis;
    const analysisText = typeof state.analysis === "string" ? state.analysis : JSON.stringify(state.analysis, null, 2);

    return (
        <div className="min-h-screen flex items-center justify-center px-6  bg-[url('/bg.webp')]  bg-cover bg-center bg-black/70 bg-blend-overlay">
            <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full">

                {/* Heading */}
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 flex items-center justify-center">
                    <span role="img" aria-label="chart">📊</span> Analysis Results
                </h1>

                <div className="flex flex-col items-center bg-gray-600 p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-white text-2xl font-semibold">News Credibility Score</h2>
                    <p className="text-5xl font-extrabold text-white mt-2 animate-pulse"><TrustScore score={trustScore} /></p>
                </div>

                

                {scrapedData ? (
                    <div className="bg-white p-6 mt-6 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            Source Details
                        </h2>
                        <p className="mt-2 text-gray-700 text-lg font-semibold">{scrapedData.title || "No title available."}</p>
                        <p className="mt-2 text-gray-600 text-lg">{scrapedData.description || "No description available."}</p>
                    </div>
                ) : (
                    <p className="text-gray-500 mt-6 text-center italic">No scraped data available.</p>
                )}
            </div>
        </div>
    );
};

export default Results;
