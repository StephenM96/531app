'use strict'

const User = require('./user')

const Workout = require('./WorkoutModel')

async function init() {
    await User.sync(),
    await Workout.sync()
}

init()

module.exports = {
    User,
    Workout
}