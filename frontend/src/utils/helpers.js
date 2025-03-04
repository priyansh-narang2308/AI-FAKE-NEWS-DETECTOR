export const generateTrustScore = (credibility, aiScore) => {
    const credibilityWeight = 0.6;
    const aiWeight = 0.4;

    const finalScore = (credibility * credibilityWeight) + (aiScore * aiWeight);

    return Math.round(finalScore); // Ensure final score is a whole number
};
