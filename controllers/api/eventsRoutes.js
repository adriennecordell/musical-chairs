const router = require("express").Router()
const { response } = require("express")
const { Events } = require("../../models")

router.get("/", async (req, res) => {
    try {
        const events = await Events.findAll()
        res.json(events)
    } catch(err) {
        response.status(400).json(err)
    }
})

router.put("/sold_tickets/:id", async (req, res) => {
    try {
      //get current amount of seats form event
      const event = await Events.findByPk(req.params.id);
  
      //num_seat - req.body
      const totalSeats = event.num_seats - req.body.num_tickets;
  
      const updateevent = await Events.update(
        { num_seats: totalSeats },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(updateevent);
    } catch (err) {
      res.status(400).json(err);
    }
  });






module.exports = router
