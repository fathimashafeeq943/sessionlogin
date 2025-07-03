const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const connectDB = require('./db/connectDB'); // Ensure this connects to MongoDB

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDB();

// Routes
app.use('/user', userRouter);
app.use('/admin', adminRouter);

// Start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
