const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'database.sqlite');
let db = null;

// Initialize database connection
function initDatabase() {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
        reject(err);
        return;
      }
      console.log('Connected to SQLite database.');
      
      // Enable foreign keys
      db.run('PRAGMA foreign_keys = ON');
      
      // Create users table if it doesn't exist
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`, (err) => {
        if (err) {
          console.error('Error creating table:', err.message);
          reject(err);
          return;
        }
        console.log('Users table ready.');
        resolve();
      });
    });
  });
}

// Insert a new user
function insertUser(userData) {
  return new Promise((resolve, reject) => {
    const { name, username, email, password } = userData;
    
    const sql = `INSERT INTO users (name, username, email, password, age, phone) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
    
    db.run(sql, [name, username, email, password], function(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve({ id: this.lastID, ...userData });
    });
  });
}

// Get all users
function getAllUsers() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT id, name, username, email, created_at 
                 FROM users ORDER BY created_at DESC`;
    
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

// Get user by ID
function getUserById(id) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE id = ?`;
    
    db.get(sql, [id], (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(row);
    });
  });
}

// Update user
function updateUser(id, userData) {
  return new Promise((resolve, reject) => {
    const { name, username, email, age, phone } = userData;
    
    const sql = `UPDATE users 
                 SET name = ?, username = ?, email = ?, age = ?, phone = ?, updated_at = CURRENT_TIMESTAMP 
                 WHERE id = ?`;
    
    db.run(sql, [name, username, email, age, phone, id], function(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve({ id, ...userData });
    });
  });
}

// Delete user
function deleteUser(id) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    
    db.run(sql, [id], function(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve({ deletedId: id, changes: this.changes });
    });
  });
}

// Get user by username
function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE username = ?`;
    
    db.get(sql, [username], (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(row);
    });
  });
}

// Close database connection
function closeDatabase() {
  return new Promise((resolve, reject) => {
    if (db) {
      db.close((err) => {
        if (err) {
          reject(err);
          return;
        }
        console.log('Database connection closed.');
        resolve();
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  initDatabase,
  insertUser,
  getAllUsers,
  getUserById,
  getUserByUsername,
  updateUser,
  deleteUser,
  closeDatabase
};