const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a port
const PORT = 3000;

// Root route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example endpoints
app.get('/posts', (req, res) => {
    // Logic to fetch all posts
});

app.get('/posts/:id', (req, res) => {
    // Logic to fetch a post by ID
});

app.post('/posts/add', (req, res) => {
    // Logic to create a new post
});

app.put('/posts/:id', (req, res) => {
    // Logic to update a post by ID
});

app.delete('/posts/:id', (req, res) => {
    // Logic to delete a post by ID
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
