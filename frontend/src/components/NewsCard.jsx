const NewsCard = ({ title, description, url, onReport }) => {
    console.log("Rendering NewsCard:", { title, description, url });

    return (
        <div className="border p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Read More
            </a>
            <button onClick={onReport} className="bg-red-500 text-white px-2 py-1 mt-2">
                Report Issue
            </button>
        </div>
    );
};

export default NewsCard