const sequelize = require("../config/connection");
const { User } = require("../models");
const { Tickets } = require("../models");
const { Venues } = require("../models");
const { Events } = require("../models");

const userData = require("./userData.json");
const ticketData = require("./ticketData.json");
const venueData = require("./venueData.json");
const eventsData = require("./eventsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Venues.bulkCreate(venueData, {
    individualHooks: true,
    returning: true,
  });

  await Tickets.bulkCreate(ticketData, {
    individualHooks: true,
    returning: true,
  });

  await Events.bulkCreate(eventsData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
