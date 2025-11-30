// routes/register-prisma.js
var express = require('express');
var router = express.Router();
const dbService = require('../dbservices/prisma');

/* GET registration form. */
router.get('/', function(req, res, next) {
  res.render('register-prisma', { 
    title: 'User Registration (Prisma)',
    name: '',
    username: '',
    email: '',
  });
});

/* POST registration form. */
router.post('/', async function(req, res, next) {
  try {
    const { name, username, email, password, age, phone } = req.body;
    
    // Basic validation
    if (!name || !username || !email || !password) {
      return res.render('register-prisma', {
        title: 'User Registration (Prisma)',
        error: 'Name, username, email, and password are required',
        name: name || '',
        username: username || '',
        email: email || ''
      });
    }
    
    // Insert user into database using Prisma
    await dbService.insertUser({ 
      name, 
      username, 
      email, 
      password
    });
    
    res.render('register-prisma', {
      title: 'User Registration (Prisma)',
      success: 'User registered successfully with Prisma!',
      name: '',
      username: '',
      email: ''
    });
  } catch (err) {
    console.error('Registration error:', err);
    
    // Handle unique constraint violations
    let errorMessage = 'An error occurred during registration';
    if (err.code === 'P2002') {
      if (err.meta?.target?.includes('username')) {
        errorMessage = 'Username already exists';
      } else if (err.meta?.target?.includes('email')) {
        errorMessage = 'Email already exists';
      }
    }
    
    res.render('register-prisma', {
      title: 'User Registration (Prisma)',
      error: errorMessage,
      name: req.body.name || '',
      username: req.body.username || '',
      email: req.body.email || ''
    });
  }
});

module.exports = router;