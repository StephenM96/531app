const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    squatEst1rm: DataTypes.INTEGER,
    benchEst1rm: DataTypes.INTEGER,
    deadliftEst1rm: DataTypes.INTEGER,
    overheadPressEst1rm: DataTypes.INTEGER,
    squatTrainingMax: DataTypes.INTEGER,
    benchTrainingMax: DataTypes.INTEGER,
    deadliftTrainingMax: DataTypes.INTEGER,
    overheadPressTrainingMax: DataTypes.INTEGER,
    squatWeek1: DataTypes.INTEGER,
    squatWeek2: DataTypes.INTEGER,
    squatWeek3: DataTypes.INTEGER,
    week1Bench: DataTypes.INTEGER,
    week2Bench: DataTypes.INTEGER,
    week3Bench: DataTypes.INTEGER,
    week1Deadlift: DataTypes.INTEGER,
    week2Deadlift: DataTypes.INTEGER,
    week3Deadlift: DataTypes.INTEGER,
    week1Ohp: DataTypes.INTEGER,
    week2Ohp: DataTypes.INTEGER,
    week3Ohp: DataTypes.INTEGER,
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Workout",
    timestamps: true,
    freezeTableName: true,
    defaultScope: {
      attributes: {},
    },
    scopes: {},
  }
);

module.exports = Workout;
