function notFoundHandler(req, res) {
  res.status(404);
  res.statusMessage = 'Not Found';
  res.json({ error: 'Resource not found' });
}

module.exports = notFoundHandler;
