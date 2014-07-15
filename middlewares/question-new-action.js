function questionNewActionHandler(req, res, next) {
  debug('question new action handler');
  var Question = models.Question;
  var body = req.body;

  debug(util.inspect(body));
  function createHandler(err, result) {
    debug('create handler'); 
    if (!err) {
      debug('save with success');
      debug(util.inspect(result));
      next();
    } else {
      next(err);
    }
  }
  Question
    .create(body, createHandler);
}
module.exports = exports = questionNewActionHandler;
