const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true }
});

const Score = mongoose.model("Score", ScoreSchema);
module.exports = Score;
