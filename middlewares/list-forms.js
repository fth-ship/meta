function listFormsHandler(req, res, next) {
  var Question = models.Question;
  res.locals.questions = [];

  function findHandler(err, result) {
    debug('find handler');
    debug(util.inspect(err));
    if (!err) {
      debug(util.inspect(result));
      res.locals.questions = result;
      next();
    } else {
      next(err);
    }
  }
  Question
    .find({})
    .sort({
      updated_at: -1
    })
    .exec(findHandler);
}
module.exports = listFormsHandler;
