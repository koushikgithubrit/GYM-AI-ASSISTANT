const mongoose = require('mongoose'); // Add this line

const LeaderboardSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
});

const Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema);
module.exports = Leaderboard;
