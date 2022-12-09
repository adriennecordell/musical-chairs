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


router.put("/sold_tickets/:id", async (req, res) => {
  try {
    //get current amount of seats form venue
    const venue = await Venues.findByPk(req.params.id);

    //num_seat - req.body
    const totalSeats = venue.num_seats - req.body.num_tickets;

    const updateVenue = await Venues.update(
      { num_seats: totalSeats },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateVenue);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
