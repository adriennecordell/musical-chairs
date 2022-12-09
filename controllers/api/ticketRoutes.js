const router = require('express').Router();
const { Tickets } = require('../../models');
//const { Venues } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const tickets = await Tickets.findAll();
        res.json(tickets)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/ticket_cost', async (req, res) => {
    try {
        //get cost of tickets from ticket model
        const ticketCost = Tickets.cost;
        res.status(200).json(ticketCost)

    } catch (err) {
        res.status(400).json(err)
    }
});

// router.put('tickets_available', async (req, res) => {
//     try {
//         //show # of tickets available based on # of seats 
//         const ticketsAvail = Venues
//     } catch (err) {
//         res.status(400).json(err)
//     }
// })