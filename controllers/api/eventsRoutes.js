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

// router.put("/upcoming_shows/:id", 
// async (req, res) => {
//     try {
//     // get event from venue

//     const events = await Events.findByPk(req.params.venue_id)

//     // logic for if sold out?
//     const soldOut = events.num_seats < 1 ? 0 : events.num_seats 

//     const updateVenue = await Events.update(
//         { num_seats: soldOut },
//         {
//           where: {
//             id: req.params.id,
//           },
//         }
//       ); 
//       console.log(updateVenue)

//     res.status(200).json(soldOut)
//     } catch (err) {
//         response.status(400).json(err)
//     }
// })





module.exports = router
