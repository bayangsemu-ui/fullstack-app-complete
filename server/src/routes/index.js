const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./users');
const dataRoutes = require('./data');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/data', dataRoutes);

router.get('/status', (req, res) => {
  res.json({
    status: 'API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
