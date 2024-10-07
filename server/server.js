const express = require('express');
const connectDB = require('./config/database')
const authRoutes = require('./routes/authRoutes');
const employeeController = require('./controllers/employeeController');
const multer = require('multer');
const employeeRoutes = require('./routes/employeeRoutes');
const dotenv = require('dotenv');
const {updateEmployee} = require("./controllers/employeeController");
const upload = multer({ dest: 'uploads/' });
// const token = require('./middlewares/authMiddleware');

// Load environment variables
dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.on('finish', () => {
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
    });
    next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.post('/api/employees/create', upload.single('image'), employeeController.createEmployee,employeeController.updateEmployee);
app.put('/api/employees/update/:id', upload.single('image'), employeeController.updateEmployee);
// Error Handling Middleware
// app.use(errorHandler);
// Environment variables
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`, app.routes));
