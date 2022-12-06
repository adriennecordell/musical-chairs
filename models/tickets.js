const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tickets extends Model {

}

Tickets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freeseTableName: true,
        underscored: true,
        modelname: 'tickets'
    }
);

module.exports = Tickets;