/**
 * Authorization Middleware
 * Checks if user has required role/permission
 */

/**
 * Check if user has ADMIN role
 */
const isAdmin = (req, res, next) => {
  if (req.session && req.session.userRole === 'ADMIN') {
    return next();
  }
  
  // User doesn't have admin role
  res.status(403).render('error', {
    message: 'Access Denied',
    error: { status: 403, message: 'You do not have permission to access this resource.' }
  });
};

/**
 * Check if user has specific role
 * Usage: authorizeRole('ADMIN') or authorizeRole(['ADMIN', 'MODERATOR'])
 */
const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    // Flatten array in case nested arrays are passed
    const roles = allowedRoles.flat();
    
    if (req.session && req.session.userRole && roles.includes(req.session.userRole)) {
      return next();
    }
    
    // User doesn't have required role
    res.status(403).render('error', {
      message: 'Access Denied',
      error: { status: 403, message: 'You do not have permission to access this resource.' }
    });
  };
};

module.exports = {
  isAdmin,
  authorizeRole
};