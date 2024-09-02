const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Import Sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests

app.use(routes); // Use routes defined in the routes directory

// Sync Sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => { // Sync models without dropping tables
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`); // Start the server on the specified port
  });
});

