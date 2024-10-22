const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const transactionRoutes = require('./routes/transactions');
app.use('/transactions', transactionRoutes);


// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Expense Tracker API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
