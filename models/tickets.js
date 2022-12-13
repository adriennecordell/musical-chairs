const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tickets extends Model {}

Tickets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "venues",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    num_seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: 'venues',
        key: "num_seats",
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelname: "tickets",
  }
);

module.exports = Tickets;
