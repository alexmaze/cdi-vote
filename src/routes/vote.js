import express from 'express';
import low from 'lowdb';
import storage from 'lowdb/file-sync';

const db = low('db.json', { storage });
let router = express.Router();

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
