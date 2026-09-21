const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// A simple GET route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World! Your Express server is working.');
});

console.log("Testing Git Revert..")
// An API route that returns JSON data
app.get('/api/user', (req, res) => {
    res.json({
        id: 1,
        name: 'John Doe',
        role: 'Developer'
    });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
