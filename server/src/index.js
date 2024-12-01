const express = require('express');
const dotenv = require('dotenv');  
const mongoose = require('mongoose');
dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    return res.send("Hello World");   
})

mongoose.connect(`${process.env.MONGO_DB}`)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})