import express from 'express';
import db from '../db.js';

const router = express.Router();

// Get all todos for a user
router.get('/', (req, res) => {
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?');
    const todos = getTodos.all(req.userId);
    res.json(todos);
})

// Create a new todo for a user
router.post('/', (req, res) => {})

// Update a todo by ID
router.put('/:id', (req, res) => {});

// Delete a todo by ID
router.delete('/:id', (req, res) => {});

export default router;