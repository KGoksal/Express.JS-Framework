// Import the Express framework and create an Express application
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs'); // Set the view engine to EJS

// Basic route for the homepage that renders an EJS template
app.get('/', (req, res) => {
  res.render('index', { title: "My EJS App!!"});
});

// Route with URL parameters that captures and displays the ID parameter
app.get('/user/:id', (req, res) => {
  const param = req.params.id;
  res.send(`The parameter of ID is: ${param}`);
});
// Example: /user/123 will display "The parameter of ID is: 123"

// Route for contact page 
app.get('/contact', (req, res) => { 
  res.render('contactme', { title: "Contact Me!"}); 
}); 

app.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: "Dashboard", username: "J.F. Kadir "});
});

// Route that handles and displays query parameters from the URL
app.get('/admin', (req, res) => {
  const queryparam = req.query.user;
  res.send(`The query parameter of user is: ${queryparam}`);
});
// Example: /admin?user=john will display "The query parameter of user is: john"

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
