const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
            content: {
                type: DataTypes.STRING,
                allowNull: false
            },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'events',
                key: 'id'
            }
        },
        act_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'events',
                key: 'id'
            }
        },
        event_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        modelName: 'events'
    }
)
modle.exports = Comment
//////