const router = require("express").Router();
const { User, Venues, Events } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((user) => user.get({ plain: true }));
    let venues = await Venues.findAll();
    venues = venues.map((venue) => venue.get({ plain: true }));
    res.render("homepage", {
      users,
      venues,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.body) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/venue/:id", async (req, res) => {
  let venue = await Venues.findByPk(req.params.id, {
    include: [{ model: Events }],
  });
  venue = venue.get({ plain: true });
  console.log(venue);
  res.render("venue", venue);
});

module.exports = router;
