const express = require('express');
const Leaderboard = require('../models/Leaderboard');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10);
        res.json(leaderboard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/add', async (req, res) => {
    try {
        const { username, score } = req.body;
        const newEntry = new Leaderboard({ username, score });
        await newEntry.save();
        res.status(201).json({ message: 'Score added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
