const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/index');
const path = require('path');


const app = express();
app.use(mainRoutes)
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3001, () => {
    console.log('listening on port 3001')
})
