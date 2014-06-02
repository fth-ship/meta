function contextHandler(req, res, next) {
  res.locals.title = 'Meta';
  next();
}
module.exports = contextHandler;
