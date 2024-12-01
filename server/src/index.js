const express = require('express');
const dotenv = require('dotenv');  
dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    return res.send("Hello World");   
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})