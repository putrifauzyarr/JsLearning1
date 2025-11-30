// routes/users-prisma.js
var express = require('express');
var router = express.Router();
const dbService = require('../dbservices/prisma');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await dbService.getAllUsers();
    res.render('users-prisma', { 
      title: 'Users List - Prisma',
      users: users 
    });
  } catch (err) {
    console.error('Error fetching users:', err);
    next(err);
  }
});

module.exports = router;