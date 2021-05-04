const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/tasks', async (req, res) => {
  res.status(500).send({ error: 'Not yet implemented!' });
})

router.post('/addTask', async (req, res) => {
    res.status(500).send({ error: 'Not yet implemented!' });
});

router.delete('/deleteTask', async (req, res) => {
    res.status(500).send({ error: 'Not yet implemented!' });
});

module.exports = router; 