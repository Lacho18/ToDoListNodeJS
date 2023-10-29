const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'doc.html'));
});

router.post('/submit', (req, res) => {
    const body = req.body;
    console.log('Received Data:', body);
    res.send('Data received by the server');
})

module.exports = router;