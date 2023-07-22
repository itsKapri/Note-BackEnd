const express = require('express');
const connectDB = require("./config/dbConnection");
const app = express();
const cors = require('cors');
require('dotenv').config();

// Connect to the database
connectDB();

// Set up CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/notes", require("./routes/notes"));

// Test endpoint to check if the server is running
app.get('/start', (req, res) => {
    res.send("Note API is working");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
