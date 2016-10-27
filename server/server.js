const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const todoData = require('./server.js')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoController = require('./todoController');

mongoose.connect('mongodb://localhost/todos');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB');
});

app.use(cors());
app.use(express.static(path.join(__dirname, '/../')));
app.use(bodyparser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../index.html')));
app.post('/todoData', todoController.create);

app.listen(3000);
console.log("Running at Port 3000");

module.exports = app;