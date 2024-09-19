[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/e__G6ZpK)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15908628)
<br>
Starter Code for Reaction Timer  <br>
Run npm install to install all dependencies <br>
The above uses package.json to build the project <br>
Note .gitignore is set to ignore node_modules <br>

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Reaction Timer System
## Simone Peter (smpeter) - MIT 1.125 Architecting and Engineering Software Systems

<br>
This is a web-based reaction timer system that allows users to test their reaction time by clicking a button as soon as its color changes. The system tracks and records each user's reaction time, displays the top 5 fastest times, prevents cheating, and provides an option for resetting the competition data.
<br>

## System Functionality
### 1. Start the Competition <br>
- Users click the "Start the fun!" button, after which the system randomly selects a delay between 1 and 20 seconds. <br>
- During this delay, the competition button is red. <br>
- After the random delay, the button changes to green, signaling the user to click it as fast as possible. <br>
### 2. Reaction Time Measurement <br>
- The user's reaction time is measured as the time between the button turning green and the user clicking the button. <br>
- The reaction time is displayed in seconds after the user clicks the green button. <br>
### 3. Cheating Prevention <br>
- If the user clicks the button before it turns green, an alert displays, saying: "Cheating is not allowed around here!" <br>
- The button is disabled until the "Start the fun!" button is clicked again to begin a new round. <br>
### 4. Enter the Competition <br>
- Users can enter their name in a form and submit their reaction time by clicking the "Enter the competition" button. <br>
- The server stores the user's name and reaction time, updates the list of the top 5 fastest times, and displays the results on the page. <br>
- If the user's time does not make it into the top 5, they are notified with an alert. <br>
### 5. Top 5 Competition Results <br>
- The server maintains a list of the top 5 fastest reaction times. <br>
- When a user submits their time, the list is updated and displayed. <br>
### 6. Reset Competition <br>
- The "Reset competition" button allows users to reset the competition data. <br>
- When clicked, the user list is cleared, and the competition is reset. <br>
## Running the System <br>
### Setup <br>
Run "npm install" to install all dependencies specified in the package.json file. <br>
### Starting the Server <br>
Run "node server.js" to start the server. This will serve the webpage and handle user requests. <br>
## User Interactions <br>
Users can start the competition, measure their reaction times, submit their scores, and reset the competition. <br> <br>
The system is built using Node.js on the server side and HTML, CSS, and JavaScript on the client side. The server uses Express.js for routing, and the competition data is stored in memory (as an array) on the server and transmitted to the server using "fetch". "get" and "post" are used for retrieving and sending data. The system provides functionalities for submitting reaction times and resetting the competition data.
