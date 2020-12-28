function validator(req, res, next) {
  if (req.query.name) {
    next();
  }
  else {
    next('No name provided');
  }
}

module.exports = validator;
