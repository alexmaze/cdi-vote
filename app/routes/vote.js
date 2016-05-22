'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _lowdb = require('lowdb');

var _lowdb2 = _interopRequireDefault(_lowdb);

var _fileSync = require('lowdb/file-sync');

var _fileSync2 = _interopRequireDefault(_fileSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const db = (0, _lowdb2.default)('db.json', { storage: _fileSync2.default });
let router = _express2.default.Router();

router.get('/status', function (req, res) {
  console.log('check vote');
  let data = db.object.vote;
  res.json({ 'success': true, 'data': data });
});

router.post('/vote', function (req, res) {
  if (req.body && req.body.name) {
    console.log('vote to', req.body.name);
    req.body.time = new Date();
    db('vote').push(req.body);
    res.json({ 'success': true });
  } else {
    console.log('vote fail', JSON.stringify(req.body));
    res.json({ 'success': false });
  }
});

module.exports = router;