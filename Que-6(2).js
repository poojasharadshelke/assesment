// Install required package: jsonwebtoken

const jwt = require('jsonwebtoken');

// Middleware function for token authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

// Use the middleware in your routes
app.get('/protected-route', authenticateToken, (req, res) => {
  // Access the authenticated user through req.user
  res.json({ message: 'Authenticated!' });
});
