const router = require('express').Router();
const path = require('path')

router.get('/',async (req,res)=>{//handlebars
    res.render('index')//handlebars-render the home view content inside the main layout and send it to browser
})
router.get('/yurt',async(req,res)=>{//handlebars
    res.render('yurt')//handlebars-render the home yurt content inside the main layout and send it to browser
})
router.get('/auditorium',async (req,res)=>{//handlebars
    res.render('auditorium')//handlebars-render the auditorium view content inside the main layout and send it to browser
})
router.get('/basement',async (req,res)=>{//handlebars
    res.render('basement')//handlebars-render the basement view content inside the main layout and send it to browser
})

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
