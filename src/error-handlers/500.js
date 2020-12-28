function errorHandler(err, req, res) {
  res.status(500);
  res.statusMessage = 'Internal Server Error';
  res.json({ error: 'Internal Server Error: ' + err });
}

module.exports = errorHandler;
