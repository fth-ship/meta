function listFormsHandler(req, res, next) {
  var forms = res.locals.forms = [];

  forms.push({
    _id: '1234567',
    title: 'Mock #1',
    created_at: Date.now()
  });

  next();
}
module.exports = listFormsHandler;
