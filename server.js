const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const routes = require('./api/routes/todoListRoutes');
mongoose.set('useFindAndModify', false);

bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app)
port = process.env.PORT || 3000;
app.listen(port)

console.log('todo list RESTful API server started on: ' + port);
