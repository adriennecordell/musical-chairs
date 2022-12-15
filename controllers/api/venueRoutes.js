const router = require("express").Router();
const { Venues } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const venues = await Venues.findAll();
    res.json(venues);
  } catch {}
});

// router.get("/sold_tickets/:id", async (req,res) => {
//   try{
// const ticketData = await Venues.findByPk(req.params.id)
//   } catch (err) {
//     res.status(400).json(err);
//   }
// })




module.exports = router;
