const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = 5000;         

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', require('./routes/root'));

app.listen(PORT, () => {console.log('App is running on port ' + PORT)});
