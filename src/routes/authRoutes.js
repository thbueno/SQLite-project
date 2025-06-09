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
        const insertTodo = db.prepare('INSERT INTO todos (user_id, task) VALUES (?, ?)');
        insertTodo.run(result.lastInsertRowid, defaultTodo);

        // create a token
        const token = jwt.sign({ id: result.lastInsertRowid }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });
        res.json({ token })

    } catch (error) {
        console.log(error.message);
        res.sendStatus(503);
    }


})

router.post('/login', (req, res) => {
    // we get the email and we look up the password associated with that email in the database

    const { username, password } = req.body;

    try {
        const getUser = db.prepare('SELECT * FROM users WHERE username = ?');
        const user = getUser.get(username);

        // if we cannot find a user associated with that username, return out from the function
        if (!user){return res.status(404).json({ message: 'User not found' });
        // create a token
    }
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      // if the password does not match, return out of the function
        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        console.log(user);

        // then we have a successful authentication
        const token = jwt.sign({ id: user.id })

    } catch (error) {
        console.log(error.message);
        res.sendStatus(503);
    }
})

export default router