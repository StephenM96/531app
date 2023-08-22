const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')


//localhost:8000/api/ <<--base route
//localhost:8000/api/workouts/
router.get("/", (req, res) => {
  Controllers.userController.getWorkouts(res)
})

//localhost:8000/api/workouts/:<user_id>
router.get("/:id", (req, res) => {
  Controllers.userController.getWorkoutsById(req, res)
})

//localhost:8000/api/workouts/create
router.post("/create", (req, res) => {
  Controllers.userController.createWorkouts(req.body, res)
})

//localhost:8000/api/workouts/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.userController.updateWorkout(req, res)
})

//localhost:8000/api/workouts/:<user_id>
router.delete('/:id', (req, res) => {
  Controllers.userController.deleteWorkout(req, res)
})

module.exports = router;
