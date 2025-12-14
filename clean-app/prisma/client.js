const { PrismaClient } = require('@prisma/client');

// Singleton pattern to ensure Prisma Client is only instantiated once
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

module.exports = prisma;