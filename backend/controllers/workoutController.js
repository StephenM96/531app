"use strict";

const Models = require("../models");

const getWorkouts = (res) => {
  Models.Workout.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data.values });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const getWorkoutsById = (req, res) => {
  Models.Workout.findAll({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const createWorkouts = async (data, res) => {
  Models.Workout.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const updateWorkout = (req, res) => {
  Models.Workout.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const deleteWorkout = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

module.exports = {
  getWorkouts,
  getWorkoutsById,
  createWorkouts,
  updateWorkout,
  deleteWorkout,
};
