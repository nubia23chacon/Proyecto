const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Holis, BIENVENIDOS. Soy Nubia Chacón' });
});

router.get('/AcercaDe', (req, res) => {
  res.render('AcercaDe', { title: 'AcercaDe' });
});

router.get('/FrameWork', (req, res) => {
  res.render('FrameWork', { title: 'FrameWork' });
});
module.exports = router;
