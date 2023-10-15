const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/public/views'));

// Define routes to render EJS templates
app.get('/', (req, res) => {
  res.render('main'); // Renders "index.ejs" from the "views" directory
});

app.get('/about', (req, res) => {
  res.render('about'); // Renders "about.ejs" from the "views" directory
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
