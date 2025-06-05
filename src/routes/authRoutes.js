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

    console.log(username, password);
    res.sendStatus(201)

})

router.post('/login', (req, res) => {
    // we get the email and we look up the password associated with that email in the database

    
})

export default router