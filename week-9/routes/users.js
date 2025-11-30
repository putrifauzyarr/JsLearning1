var express = require('express');
var router = express.Router();
const dbService = require('../dbservices/sqlite');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await dbService.getAllUsers();
    res.render('users', { users: users });
  } catch (err) {
    console.error('Error fetching users:', err);
    next(err);
  }
});

module.exports = router;
