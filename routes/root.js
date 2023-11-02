const express = require('express');
const router = express.Router();
const path = require('path');
const dataFunctions = require('../controlers/taskFunctions');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'doc.html'));
});

router.post('/submit', async (req, res) => {
    const body = req.body;
    res.sendFile(path.join(__dirname, '..', 'public', 'doc.html'));

    await dataFunctions.addTask(body);
});

router.get('/showAllComplete', (req, res) => {
    let allTaskArray = dataFunctions.getAllTasks();
    console.log(allTaskArray);
    res.json(allTaskArray);
});

/*router.get('/showAllSkiped', (req, res) => {
    //here goes the skiped tasks
});*/

router.get('/getAllTasks', (req, res) => {
    let allTaskArray = dataFunctions.getAllTasks();
    console.log(allTaskArray);
    res.json(allTaskArray);
})

module.exports = router;
