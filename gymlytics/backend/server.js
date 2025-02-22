// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error(err));

// app.use("/api/auth", authRoutes);
// app.get("/", (req, res) => {
//     res.send("GymLytics API is running...");
//   });
  
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// //2nsd
// // require("dotenv").config();
// // const express = require("express");
// // const mongoose = require("mongoose");

// // const app = express();

// // // Load environment variables
// // const MONGO_URI = process.env.MONGO_URI;
// // const PORT = process.env.PORT || 5000;

// // // Check if MONGO_URI is loaded correctly
// // if (!MONGO_URI) {
// //   console.error("Error: MONGO_URI is not defined in .env file");
// //   process.exit(1); // Stop server if no MongoDB URI
// // }

// // // Connect to MongoDB
// // mongoose
// //   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log("MongoDB connected"))
// //   .catch((err) => console.error("MongoDB connection error:", err));

// // // Start server
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));