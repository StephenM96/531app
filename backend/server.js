const express = require('express')
const app = express()

require('dotenv').config()

let dbConnect = require('./dbConnect')

const Models = require("./models")

async function init() {
    await Models.User.sync(),
    await Models.Workout.sync()
}

init()

const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const workoutRoutes = require('./routes/workoutRoutes')

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/workouts', workoutRoutes)

app.get("/", (req, res) => {
    res.json({message: "Hello world!"})
})

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> {
    console.log(`Server is up and running on port: ${PORT}`)
})