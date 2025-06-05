import express, { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// Register a new user endpoint auth/register
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // save gilgameshesh in the database

    // encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // save the new user and the hashed password in the database
    try {
        const insertUser = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        const result = insertUser.run(username, hashedPassword);

        // now that we have the user, i want to add their first todo for them
        const defaultTodo = `Hello :) add your first todo!`
        const insertTodo = db.prepare('INSERT INTO todos (user_id, todo) VALUES (?, ?)');

    } catch (error) {
        console.log(error.message);
        res.sendStatus(503);
    }


})

router.post('/login', (req, res) => {
    // we get the email and we look up the password associated with that email in the database

    
})

export default router