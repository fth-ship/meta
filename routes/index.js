var express = require('express');
var router = express.Router();

router.get('/', middlewares.listForms, controllers.app.index);
router.post('/form/new', middlewares.formNewAction, controllers.app.formNewAction);
router.get('/form/new', controllers.app.formNew);

module.exports = router;
