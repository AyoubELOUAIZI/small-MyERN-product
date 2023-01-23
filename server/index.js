const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const ProductRoutes =require('./Routes/product')

// Middleware
app.use(express.json());



//routes
app.use('/api/product', ProductRoutes);

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, APIs are runing ...');
});






// Routes
// app.use('/api/users', require('./routes/users'));
// app.use('/api/products', require('./routes/products'));

// Error handling middleware
// app.use((err, req, res, next) => {
//     res.status(err.status || 500).json({
//         error: {
//             message: err.message
//         }
//     });
// });


//-----------------------------------------------------------------------------------//
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
