// dbservices/prisma.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Initialize database
async function initDatabase() {
  try {
    await prisma.$connect();
    console.log('Connected to database with Prisma');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
}

// Insert a new user
async function insertUser(userData) {
  try {
    const { name, username, email, password, age, phone } = userData;
    
    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password,
      }
    });
    
    return user;
  } catch (error) {
    throw error;
  }
}

// Get all users
async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return users;
  } catch (error) {
    throw error;
  }
}

// Get user by username
async function getUserByUsername(username) {
  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });
    
    return user;
  } catch (error) {
    throw error;
  }
}

// Close database connection
async function closeDatabase() {
  try {
    await prisma.$disconnect();
    console.log('Prisma database connection closed.');
  } catch (error) {
    console.error('Error closing database connection:', error);
    throw error;
  }
}

module.exports = {
  initDatabase,
  insertUser,
  getAllUsers,
  getUserByUsername,
  closeDatabase
};