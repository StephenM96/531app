const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')


//localhost:8000/api/ <<--base route
//localhost:8000/api/workouts/
router.get("/", (req, res) => {
  Controllers.workoutController.getWorkouts(res)
})

//localhost:8000/api/workouts/:<workout_id>
router.get("/:id", (req, res) => {
  Controllers.workoutController.getWorkoutsById(req, res)
})

//localhost:8000/api/workouts/create
router.post("/create", (req, res) => {
  Controllers.workoutController.createWorkouts(req.body, res)
})

//localhost:8000/api/workouts/:<workout_id>
router.put('/:id', (req, res) => {
  Controllers.workoutController.updateWorkout(req, res)
})

//localhost:8000/api/workouts/:<workout_id>
router.delete('/:id', (req, res) => {
  Controllers.workoutController.deleteWorkout(req, res)
})

module.exports = router;
