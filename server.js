// This will be the node Express server that will serve up your app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3030;
const path = require('path');
// these are some of the libraries you will need

// Array to store names and reaction times
let users = [];

app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the web page with the form
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

// Handle the form submission
app.post('/input', function(req, res){
    const name = escape(req.body.name);
    const time = req.body.time;

    // Add the new user to the array
    users.push({name: name, time: time});

    // Sort competition times in ascending order
    users.sort((a,b) => a.time - b.time);

    // Send only top 5 users back
    const topUsers = users.slice(0,5);

    // Check if current user made it to top 5
    const userMadeIt = topUsers.some(user => user.name === name); 

    // Send the updated list of top users and whether the user made it or not back as JSON
    res.json({ topUsers, userMadeIt });
});

// Handle the reset competition request
app.post('/reset', function(req, res) {
    // Clear the users array
    users = [];

    // Send a success response
    res.json({ message: 'Competition has been reset!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});