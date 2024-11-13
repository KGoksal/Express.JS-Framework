// I imported the Express framework and created an Express application
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs'); // I set the view engine to EJS

// I created a basic route for the homepage I made this route respond with an EJS template when accessing the root URL
app.get('/', (req, res) => {
  res.render('index', { title: "My EJS App!"});
});

// I created a route with URL parameters. I made this route capture the ID parameter from the URL

app.get('/user/:id', (req, res) => {
  const param = req.params.id;
  res.send(`The parameter of ID is: ${param}`); // made this route display the ID parameter
});
// Example: /user/123 will display "The parameter of ID is: 123"


// I created a route that handles query parameters, I made this route read the 'user' query parameter from the URL

app.get('/admin', (req, res) => {
  const queryparam = req.query.user;
  res.send(`The query parameter of user is: ${queryparam}`); // made this route display the user query parameter
});
// Example: /admin?user=john will display "The query parameter of user is: john"


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
