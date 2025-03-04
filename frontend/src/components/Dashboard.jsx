import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [analyzedNews, setAnalyzedNews] = useState([]);

    useEffect(() => {
        const storedNews = JSON.parse(localStorage.getItem('analyzedNews')) || [];
        setAnalyzedNews(storedNews);
    }, []);

    const clearDashboard = () => {
        localStorage.removeItem('analyzedNews');
        window.location.reload();
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gray-300">
            <button onClick={clearDashboard} className="btn btn-error ml-350">
                Clear Dashboard
            </button>
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Dashboard</h1>

            <div className="overflow-x-auto w-full max-w-4xl bg-gray-100 shadow-2xl rounded-lg p-6">
                {analyzedNews.length > 0 ? (
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-lg text-black text-center">News Content / URL</th>
                                <th className="text-left text-lg text-black">Trust Score</th>
                            </tr>

                        </thead>
                        <tbody>
                            {analyzedNews.map((news, index) => (
                                <tr key={index} className="mb-6 border-b-2 border-gray-400">
                                    <td className="text-black text-xl py-6">
                                        {news.text} <br /><br />
                                        <a href={news.url} className="text-blue-600 underline text-lg">{news.url}</a>
                                    </td>
                                    <td className="font-bold text-2xl text-black text-center bg-gray-300 rounded-md px-4 py-2 w-16">
                                        {news.trustScore}
                                    </td>
                                </tr>
                            ))}
                        </tbody>



                    </table>
                ) : (
                    <p className="text-center text-gray-500 text-lg">No analyzed news available.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
