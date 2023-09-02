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
    squatOriginalMaxWeight: DataTypes.INTEGER,
    benchOriginalMaxWeight: DataTypes.INTEGER,
    deadliftOriginalMaxWeight: DataTypes.INTEGER,
    overheadPressOriginalMaxWeight: DataTypes.INTEGER,
    squatOriginalMaxReps: DataTypes.INTEGER,
    benchOriginalMaxReps: DataTypes.INTEGER,
    deadliftOriginalMaxReps: DataTypes.INTEGER,
    overheadPressOriginalMaxReps: DataTypes.INTEGER,
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
    benchWeek1: DataTypes.INTEGER,
    benchWeek2: DataTypes.INTEGER,
    benchWeek3: DataTypes.INTEGER,
    deadliftWeek1: DataTypes.INTEGER,
    deadliftWeek2: DataTypes.INTEGER,
    deadliftWeek3: DataTypes.INTEGER,
    ohpWeek1: DataTypes.INTEGER,
    ohpWeek2: DataTypes.INTEGER,
    ohpWeek3: DataTypes.INTEGER,
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Workout",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Workout;
