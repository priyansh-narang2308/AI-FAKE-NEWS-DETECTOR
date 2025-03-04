const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
})); app.use(express.json());

app.use('/api/news', newsRoutes);
app.use('/api/', userRoutes);

app.use(errorHandler);

connectDB();

module.exports = app;