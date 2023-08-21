const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    //check out for a create table method for sequelize

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    squatOriginalMaxWeight: DataTypes.INTEGER,
    benchOriginalMaxWeight: DataTypes.INTEGER,
    deadliftOriginalMaxWeight: DataTypes.INTEGER,
    overheadPressOriginalMaxWeight: DataTypes.INTEGER,
    squatOriginalMaxReps: DataTypes.INTEGER,
    benchOriginalMaxReps: DataTypes.INTEGER,
    deadliftOriginalMaxReps: DataTypes.INTEGER,
    overheadPressOriginalMaxReps: DataTypes.INTEGER,
    workoutID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "workout", //name of the model - come back to this...
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withPassword: {
        attributes: {},
      },
    },
  }
);

module.exports = User;
