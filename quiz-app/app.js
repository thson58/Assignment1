const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/database');
const quizRoutes = require('./routes/quizRoutes');
const questionRoutes = require('./routes/questionRoutes');
const cors = require('cors');  // Thêm import cors

const app = express();

// Kết nối MongoDB
connectDB();

// Cấu hình middleware
app.use(cors());  // Thêm middleware cors để cho phép các yêu cầu cross-origin
app.use(bodyParser.json());

// Routes
app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
