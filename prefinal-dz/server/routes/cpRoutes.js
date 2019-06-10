const express = require('express');
const router = express.Router();
const passport = require('passport');
const cpController = require('../controllers/cpController');
const { validateBody, schemas } = require('../healper/routerHealper');

router.route('/companies')
    .get( cpController.getAllCompanies );

router.route('/company')
    .post(validateBody(schemas.companySchema), cpController.addCompany);

router.route('/company/:companyId')
    .get(cpController.getOneCompany)
    .put(validateBody(schemas.companySchema), cpController.updateCompany)
    .delete(cpController.deleteCompany);

router.route('/profile')
    .get(cpController.getProfile)
    .put(cpController.updateProfile);

module.exports = router;