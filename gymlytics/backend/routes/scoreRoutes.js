const express = require("express");
const Score = require("../models/Score");

const router = express.Router();

// Save Score
router.post("/save-score", async (req, res) => {
    try {
        const { username, score } = req.body;
        const newScore = new Score({ username, score });
        await newScore.save();
        res.status(201).json({ message: "Score saved" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get Leaderboard
router.get("/leaderboard", async (req, res) => {
    try {
        const topScores = await Score.find().sort({ score: -1 }).limit(10);
        res.json(topScores);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
