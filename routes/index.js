var express = require('express');
var router = express.Router();

router.get('/', middlewares.listForms, controllers.app.index);
router.get('/form/new', controllers.app.formNew);

module.exports = router;
