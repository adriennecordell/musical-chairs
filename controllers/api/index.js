const router = require("express").Router();
const venuesRoutes = require("./venueRoutes");
//const ticketRoutes = require("./ticketRoutes");
const eventRoutes = require("./eventsRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
//router.use("/tickets", ticketRoutes);
router.use("/venues", venuesRoutes);
router.use("/events", eventRoutes);

module.exports = router;
