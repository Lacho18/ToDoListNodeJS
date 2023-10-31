const express = require('express');
const router = express.Router();
const path = require('path');
const dataFunctions = require('../controlers/taskFunctions'); // Make sure the import path is correct

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'doc.html'));
});

router.post('/submit', async (req, res) => {
    const body = req.body;
    //console.log('Received Data:', body);
    res.sendFile(path.join(__dirname, '..', 'public', 'doc.html'));

    await dataFunctions.addTask(body); // Make sure to await the addTask function
});

router.get('/showAllComplete', (req, res) => {
    let allTaskArray = dataFunctions.getAllTasks();
    console.log(allTaskArray);
    res.json(allTaskArray);
});

router.get('/showAllSkiped', (req, res) => {
    //here goes the skiped tasks
})

module.exports = router;
