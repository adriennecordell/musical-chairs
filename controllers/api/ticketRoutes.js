const router = require('express').Router();
const { Tickets } = require('../../models');

router.get('/tickets', async (req, res) => {
    try {
        const ticketData = await Tickets.findOne({ where: { name: req.body.name } });

        if (!ticketData) {
            res
              .status(400)
              .json({ message: 'Nothing matches your search '});
            return;
        }
    } catch (err) {
        res.status(400).json(err);
    }
});