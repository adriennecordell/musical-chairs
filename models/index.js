const User = require("./User");
const Tickets = require("./tickets");
const Events = require("./events");
const Venues = require("./venues");

Venues.hasMany(Events, {
  foreignKey: "venue_id",
});
Events.belongsTo(Venues, {
  foreignKey: "venue_id",
});

module.exports = { User, Tickets, Events, Venues };
