const sequelize = require('../config/connection');
const { User } = require('../models');
const { Tickets } = require('../models');
const { Venues } = require('../models');
const { Events } = require('../models');

const userData = require('./userData.json');
const ticketsData = require('./ticketsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  }); 

  await Tickets.bulkCreate(ticketsData, {
    individualHooks: true,
    returning: true,
  });

  await Venues.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Events.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
