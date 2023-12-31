const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config();

let dbConnect = require("./dbConnect");

const Models = require("./models");
const Seeds = require("./seeds")

async function init() {
  await Models.User.sync(), await Models.Workout.sync();
  await Seeds.Users.seedUsers();
  await Models.Workout.sync()
  // await seedWorkouts.Workout.seedWorkouts();
}

init();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

app.use(cors())

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
