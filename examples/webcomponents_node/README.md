# Pre-requisite
This is a Node.JS application.

Please install Node + NPM from here:
https://nodejs.org/en/download/

# Setup
Once you have node and NPM installed run:
`npm install`

Then:
`npm start`  to start the server

# Instructions
Open Browser to http://localhost:8080 (you can change the port number if you have a conflict in server.js line #9)

This is a "fake authentication" mecghanism, there are two valid logins: "yuval" and "brian", any other will result in an authentication error
password does not matter.

The seed data is stored an initialized from a "poor man's MongoDB", basically a simple JSON file with the User records. 
I decided to take a small short-cut and not make the data updates write back to the file.

So any changes made to the live data will persist browser sessions, but not server restarts.

When the Server starts up, a qoute engine will generate qoute every 5 seconds. You can change this interval in router.js line #5.
This Qoute engine is a WebSocket that PUSHES the qoutes to all connected clients.

You can open separate tabs to both User accounts.

Enjoy!

