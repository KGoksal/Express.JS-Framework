// Import Express framework and create an Express application
const express = require('express');
const app = express();
const port = 3000;

// Create a basic route for the homepage. This route responds with a simple greeting when accessing the root URL
app.get('/', (req, res) => {
  res.send('Hello Express.');
});

// Create a route with URL parameters.  This route captures the ID parameter from the URL

app.get('/user/:id', (req, res) => {
  const param = req.params.id;
  res.send(`The parameter of ID is: ${param}`);
});
// Example: /user/123 will display "The parameter of ID is: 123"


// Create a route that handles query parameters. This route reads the 'user' query parameter from the URL

app.get('/admin', (req, res) => {
  const queryparam = req.query.user;
  res.send(`The query parameter of user is: ${queryparam}`);
});
// Example: /admin?user=john will display "The query parameter of user is: john"


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
