/**
 * Authentication Middleware
 * Checks if user is authenticated (logged in)
 */
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    // User is authenticated, attach user info to request
    req.user = {
      id: req.session.userId,
      email: req.session.userEmail,
      name: req.session.userName,
      role: req.session.userRole
    };
    return next();
  }
  
  // User is not authenticated, redirect to login
  res.redirect('/login');
};

/**
 * Optional: Check if user is NOT authenticated (for login/register pages)
 */
const isNotAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    // User is already logged in, redirect to home
    return res.redirect('/dashboard');
  }
  next();
};

module.exports = {
  isAuthenticated,
  isNotAuthenticated
};