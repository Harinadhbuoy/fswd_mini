const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
