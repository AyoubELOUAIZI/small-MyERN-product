const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
