const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

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


module.exports = router;