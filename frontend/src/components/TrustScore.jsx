const TrustScore = ({ score = 0 }) => { 
    const getColor = (score) => {
        if (score >= 80) return 'text-green-500';
        if (score >= 50) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">Trust Score</h2>
            <p className={`text-6xl font-bold ${getColor(score)}`}>{score}</p>
        </div>
    );
};

export default TrustScore;
