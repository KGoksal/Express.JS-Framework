# My EJS App

This is a simple Express app I built to demonstrate how to use EJS (Embedded JavaScript) templates, as well as handle URL and query parameters. It’s a great starting point for learning how to build dynamic web pages!


<img width="345" alt="Screenshot 2024-11-16 at 10 12 22 AM" src="https://github.com/user-attachments/assets/37ede8db-35e4-4408-a566-afdc1720e1fb">



<img width="371" alt="Screenshot 2024-11-16 at 10 12 46 AM" src="https://github.com/user-attachments/assets/95392df9-b6df-49f3-a0ef-ab71ead4e737">

## Features

- I use EJS templates to render dynamic HTML content.
- The app handles URL parameters to capture specific data like user IDs.
- It also displays query parameters from the URL to make the app more flexible.
- The app includes basic routes, such as a homepage, contact page, user dashboard, and admin section.

## Installation

To run this app, you’ll need to have Node.js and npm installed. If you don’t have them yet, you can get them here.

Once you’ve got that set up, here’s how to get started:

### 1. Clone the repository or download the project files.

### 2. Install the necessary dependencies by running this command in your project directory:

```
npm install
```

### 3. Start the server:

node app.js

### 4. Open your browser and go to:

```
http://localhost:3000
```

The server will run on port 3000 by default, so you should see the homepage!

## View Templates

Make sure you have placed the .ejs files inside the /views directory, as that’s where Express will look for them to render the pages properly.

### Dependencies

Here are the dependencies I used in this project:
- express: This is the web framework I used to build the app.
- ejs: The template engine for rendering dynamic views.
