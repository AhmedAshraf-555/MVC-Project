const express = require('express');
const { getForms, createForm } = require('../controllers/form');
const router = express.Router();
router.get('/forms', getForms);
router.post('/form', createForm)

module.exports = router;