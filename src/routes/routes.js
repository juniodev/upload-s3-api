const uploadFile = require('../controllers/upload-file');
const router = require('express').Router();

router.post('/upload/file', uploadFile)

module.exports = router
