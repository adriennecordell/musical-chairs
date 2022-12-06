const router = require("express").Router();
const venuesRoutes = require("../../models/venues");
const ticketRoutes = require("../../models/tickets");
const eventRoutes = require("../../models/events");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/tickets", ticketRoutes);
router.use("/venues", venuesRoutes);
router.use("/events", eventRoutes);

module.exports = router;
