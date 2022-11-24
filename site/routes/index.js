var express = require('express');
var fileManager = require('../services/FileManager')
var router = express.Router();

router.get('/', function(req, res, next) {
  fileManager.getFiles(res)
});

router.post('/upload', function(req, res, next) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  fileManager.uploadFiles(req, res)
});

module.exports = router;
