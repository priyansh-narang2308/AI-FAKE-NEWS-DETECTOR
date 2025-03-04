import API from './api';
import axios from "axios"

const API_URL = 'http://localhost:5000/api'; 

export const analyzeNews = async (data) => {
    try {
        const response = await API.post('/news/analyze', data);
        return response;
    } catch (err) {
        throw err;
    }
};

export const fetchFeedback = async () => {
    try {
        const response = await axios.get(`${API_URL}/feedback`, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000 
        });

        console.log('Feedback API Response:', response);

        return response;
    } catch (error) {
        console.error('Error fetching feedback:', {
            message: error.message,
            response: error.response,
            config: error.config
        });

        throw new Error(
            error.response
                ? `API Error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`
                : `Network Error: ${error.message}`
        );
    }
};

export const submitFeedback = async (feedbackData) => {
    try {
        const response = await axios.post(`${API_URL}/feedback`, feedbackData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        // console.error('Error submitting feedback:', error);
        throw error;
    }
};