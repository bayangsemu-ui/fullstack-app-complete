const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { asyncHandler } = require('../middleware/errorHandler');
const pool = require('../config/database');

const router = express.Router();

// Get all data
router.get('/', asyncHandler(async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM data ORDER BY created_at DESC'
  );
  res.json({ data: result.rows, total: result.rows.length });
}));

// Create data
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  if (!title) {
    return res.status(400).json({ error: 'Title required' });
  }

  const result = await pool.query(
    'INSERT INTO data (title, description, user_id) VALUES ($1, $2, $3) RETURNING *',
    [title, description, userId]
  );

  res.status(201).json({ message: 'Data created successfully', data: result.rows[0] });
}));

// Update data
router.put('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const result = await pool.query(
    'UPDATE data SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, description, id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Data not found' });
  }

  res.json({ message: 'Data updated successfully', data: result.rows[0] });
}));

// Delete data
router.delete('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await pool.query('DELETE FROM data WHERE id = $1 RETURNING id', [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Data not found' });
  }

  res.json({ message: 'Data deleted successfully' });
}));

module.exports = router;
